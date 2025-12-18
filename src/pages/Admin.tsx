import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  created_at: string;
}

interface JoinApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  experience: string;
  interests: string;
  motivation: string;
  created_at: string;
}

export default function Admin() {
  const [loading, setLoading] = useState(true);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [applications, setApplications] = useState<JoinApplication[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    // Verificar que el usuario tiene rol admin o hr
    const { data: userRoles, error: rolesError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id);

    if (rolesError) {
      toast({
        title: "Error de verificación",
        description: "No se pudo verificar tu rol de usuario.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    const hasAccess = userRoles?.some(
      (r) => r.role === "admin" || r.role === "hr"
    );

    if (!hasAccess) {
      toast({
        title: "Acceso denegado",
        description: "No tienes permisos para acceder al panel de administración.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    await loadData();
  };

  const loadData = async () => {
    setLoading(true);
    
    try {
      const [messagesRes, appsRes] = await Promise.all([
        supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
        supabase.from("join_applications").select("*").order("created_at", { ascending: false })
      ]);

      if (messagesRes.error) throw messagesRes.error;
      if (appsRes.error) throw appsRes.error;

      setContactMessages(messagesRes.data || []);
      setApplications(appsRes.data || []);
    } catch (error: any) {
      toast({
        title: "Error loading data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="messages">
          <TabsList>
            <TabsTrigger value="messages">Contact Messages ({contactMessages.length})</TabsTrigger>
            <TabsTrigger value="applications">Job Applications ({applications.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                {contactMessages.length === 0 ? (
                  <p className="text-muted-foreground">No messages yet.</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Message</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contactMessages.map((msg) => (
                        <TableRow key={msg.id}>
                          <TableCell>{new Date(msg.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>{msg.name}</TableCell>
                          <TableCell>{msg.email}</TableCell>
                          <TableCell>{msg.category}</TableCell>
                          <TableCell>{msg.subject}</TableCell>
                          <TableCell className="max-w-md truncate">{msg.message}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {applications.length === 0 ? (
                  <p className="text-muted-foreground">No applications yet.</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Experience</TableHead>
                        <TableHead>Interests</TableHead>
                        <TableHead>Motivation</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>{app.full_name}</TableCell>
                          <TableCell>{app.email}</TableCell>
                          <TableCell>{app.phone || "N/A"}</TableCell>
                          <TableCell className="max-w-xs truncate">{app.experience}</TableCell>
                          <TableCell className="max-w-xs truncate">{app.interests}</TableCell>
                          <TableCell className="max-w-md truncate">{app.motivation}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

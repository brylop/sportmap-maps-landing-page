import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Precio mes 6',
    mindbody: '$400-700',
    classpass: '0 SaaS / -60% margen',
    sportmaps: '$19-99',
    sportmapsHighlight: true,
  },
  {
    feature: 'App incluida',
    mindbody: '+$39-99 USD',
    classpass: 'De ClassPass',
    sportmaps: 'Incluida',
    sportmapsHighlight: true,
  },
  {
    feature: 'Integraciones',
    mindbody: '+$15-50 USD',
    classpass: '-',
    sportmaps: 'Incluidas',
    sportmapsHighlight: true,
  },
  {
    feature: 'Cliente es tuyo',
    mindbody: 'Parcial',
    classpass: 'No',
    sportmaps: '100%',
    sportmapsHighlight: true,
  },
  {
    feature: 'Patrocinios IA',
    mindbody: '-',
    classpass: '-',
    sportmaps: 'SponsorMatch',
    sportmapsHighlight: true,
  },
];

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-sport-text-primary mb-12"
        >
          SportMaps vs. La Competencia Real
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-sport-glass">
                <th className="text-left p-4 text-sport-text-primary font-semibold rounded-tl-xl">Feature</th>
                <th className="text-center p-4 text-sport-text-secondary font-medium">Mindbody</th>
                <th className="text-center p-4 text-sport-text-secondary font-medium">ClassPass</th>
                <th className="text-center p-4 text-sport-primary font-semibold rounded-tr-xl bg-sport-primary/10">SportMaps</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr 
                  key={row.feature}
                  className={`border-b border-sport-border ${index % 2 === 0 ? 'bg-sport-card' : 'bg-sport-surface'}`}
                >
                  <td className="p-4 text-sport-text-primary font-medium">{row.feature}</td>
                  <td className="p-4 text-center text-sport-text-secondary">
                    {row.mindbody === '-' ? <Minus className="w-4 h-4 mx-auto text-sport-text-muted" /> : row.mindbody}
                  </td>
                  <td className="p-4 text-center text-sport-text-secondary">
                    {row.classpass === '-' ? (
                      <Minus className="w-4 h-4 mx-auto text-sport-text-muted" />
                    ) : row.classpass === 'No' ? (
                      <X className="w-5 h-5 mx-auto text-sport-highlight" />
                    ) : (
                      row.classpass
                    )}
                  </td>
                  <td className="p-4 text-center bg-sport-primary/5">
                    <span className="inline-flex items-center gap-1 text-sport-primary font-semibold">
                      <Check className="w-4 h-4" />
                      {row.sportmaps}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

/** Avatar circular de Mapi, el asistente de IA de SportMaps (mapi-avatar-512.png). */
export function MapiAvatar({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img
      src="/mapi/mapi-avatar-192.webp"
      srcSet="/mapi/mapi-avatar-96.webp 96w, /mapi/mapi-avatar-192.webp 192w, /mapi/mapi-avatar-512.png 512w"
      sizes="64px"
      alt="Mapi, el asistente de IA de SportMaps"
      width={192}
      height={192}
      decoding="async"
      className={`${className} rounded-full object-cover shrink-0 bg-primary/10`}
    />
  );
}

import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center" aria-label="Smile inicio">
          <Image
            src="/images/smile-logo.svg"
            alt="Smile"
            width={160}
            height={60}
            priority
            className="h-auto w-[110px] opacity-95 transition hover:opacity-100 md:w-[140px]"
          />
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#colecciones"
            className="rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-[11px] uppercase tracking-[0.24em] text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black"
          >
            Explorar
          </a>

          <a
            href="/tienda"
            className="rounded-full border border-white/15 px-6 py-2.5 text-[11px] uppercase tracking-[0.24em] text-white/85 transition hover:border-white/40 hover:text-white"
          >
            Tienda
          </a>
        </div>
      </div>
    </header>
  );
}
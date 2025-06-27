import Link from 'next/link';

function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-bold text-slate-800">Bien-être Mental</span>
          </div>
        </Link>

        {/* Menu */}
        <nav className="space-x-6">
          <Link href="/">
            <span className="text-slate-700 hover:text-blue-600 font-medium">Accueil</span>
          </Link>
          <Link href="/about">
            <span className="text-slate-700 hover:text-blue-600 font-medium">À propos</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

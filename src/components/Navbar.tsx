import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Giới thiệu', href: '/#hero' },
    { name: 'Bài tập', href: '/#tasks' },
    { name: 'Quá trình', href: '/#building' },
    { name: 'Tổng kết', href: '/#journey' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-accent-peach text-white flex items-center justify-center shadow-lg shadow-accent-peach/30 transition-transform hover:scale-110">
              <Cpu className="w-5 h-5" />
            </div>
            <a href="/#top" className="font-serif text-xl font-medium text-stone-900 tracking-tight">
              Ngô Thiện Nhân
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="shadow-lg rounded-lg">
              <Logo size={32} />
             </div>
            <div>
              <p className="font-serif font-medium text-stone-900">Ngô Thiện Nhân</p>
              <p className="text-xs text-stone-500">K70I-CS2 • 25021920</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-stone-500">
              © 2026 Designed & Built for <br className="md:hidden" />
              <span className="font-medium text-stone-700">Nhập môn CNS&AI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

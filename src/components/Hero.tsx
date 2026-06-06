import { motion } from 'motion/react';
import { Compass, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 pt-8 md:pt-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <span className="text-accent-peach font-medium tracking-wide text-sm uppercase">Portfolio Kỹ thuật số</span>
        <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight tracking-tight text-pretty">
          Xin chào, tôi là <br/><span className="italic text-stone-800">Ngô Thiện Nhân</span>
        </h1>
        <p className="mt-6 text-lg md:text-[19px] text-stone-600 leading-relaxed max-w-3xl">
          Tôi là sinh viên năm nhất chuyên ngành Khoa học Máy tính tại Trường Đại học Công nghệ - ĐHQGHN (UET - VNU). Với ngọn lửa đam mê công nghệ và khát khao chinh phục tri thức, tôi đặc biệt hứng thú việc nghiên cứu chuyên sâu về Trí tuệ Nhân tạo (AI), Học máy (ML), Học sâu (DL) và các ứng dụng đột phá trong lĩnh vực Tài chính (Finance).
        </p>
        
        {/* Lớp, Ngành, Trường Tags */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="px-4 py-2 rounded-lg border border-stone-200 bg-white shadow-sm text-sm font-medium text-stone-700 font-mono hover:border-stone-300 transition-colors cursor-default">
            CLASS K70I-CS2
          </div>
          <div className="px-4 py-2 rounded-lg border border-stone-200 bg-white shadow-sm text-sm font-medium text-stone-700 font-mono hover:border-stone-300 transition-colors cursor-default">
            COMPUTER SCIENCE
          </div>
          <div className="px-4 py-2 rounded-lg border border-stone-200 bg-white shadow-sm text-sm font-medium text-stone-700 font-mono hover:border-stone-300 transition-colors cursor-default">
            UET - VNU
          </div>
        </div>

        {/* Sở thích Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1">Sở thích:</span>
          <div className="px-4 py-2 rounded-lg border border-stone-200 bg-stone-50/50 hover:bg-stone-100 shadow-sm text-sm font-medium text-stone-700 font-mono transition-colors cursor-default">
            GAME
          </div>
          <div className="px-4 py-2 rounded-lg border border-stone-200 bg-stone-50/50 hover:bg-stone-100 shadow-sm text-sm font-medium text-stone-700 font-mono transition-colors cursor-default">
            CODE
          </div>
          <div className="px-4 py-2 rounded-lg border border-stone-200 bg-stone-50/50 hover:bg-stone-100 shadow-sm text-sm font-medium text-stone-700 font-mono transition-colors cursor-default">
            ĂN
          </div>
          <div className="px-4 py-2 rounded-lg border border-stone-200 bg-stone-50/50 hover:bg-stone-100 shadow-sm text-sm font-medium text-stone-700 font-mono transition-colors cursor-default">
            NGỦ
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 grid md:grid-cols-2 gap-6"
      >
        {/* Core block 1: Định hướng phát triển */}
        <div className="claude-card p-6 md:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <Compass className="w-5 h-5 text-accent-peach" />
            <h2 className="font-serif text-2xl text-stone-900">Định hướng phát triển</h2>
          </div>
          <ul className="space-y-4 text-stone-600 text-[15px] leading-relaxed flex-grow">
            <li className="flex items-start">
               <span className="mr-2.5 text-accent-peach font-bold">✦</span>
               Chinh phục các kiến thức nền tảng và chuyên sâu về Khoa học Máy tính, bao gồm cấu trúc dữ liệu nâng cao, tối ưu giải thuật và kiến trúc hệ thống.
            </li>
            <li className="flex items-start">
               <span className="mr-2.5 text-accent-peach font-bold">✦</span>
               Nghiên cứu ứng dụng thực tiễn của AI, Machine Learning và Deep Learning để xây dựng các công cụ phân tích tự động thông minh, tối ưu hóa bài toán Finance.
            </li>
            <li className="flex items-start">
               <span className="mr-2.5 text-accent-peach font-bold">✦</span>
               Rèn luyện kỹ năng tư duy phản biện, giải quyết vấn đề linh hoạt và giao tiếp cộng tác hiệu quả đa nền tảng trong môi trường công nghệ số toàn cầu.
            </li>
          </ul>
        </div>
        
        {/* Core block 2: Về Portfolio */}
        <div className="claude-card p-6 md:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <BookOpen className="w-5 h-5 text-accent-peach" />
            <h2 className="font-serif text-2xl text-stone-900">Về Portfolio</h2>
          </div>
          <p className="text-stone-600 leading-relaxed text-[15px] flex-grow">
            Portfolio này là nơi lưu trữ và trình bày tiến trình học tập của tôi trong học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo. 
            <br/><br/>
            Mỗi bài tập là một minh chứng thực tế cho những kỹ năng tôi đã rèn luyện: tư duy hệ thống, khả năng tìm kiếm học thuật, sử dụng AI, hợp tác làm việc trực tuyến và giữ vững nguyên tắc liêm chính khoa học.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

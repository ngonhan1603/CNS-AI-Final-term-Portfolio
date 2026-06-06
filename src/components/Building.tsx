import { motion } from 'motion/react';
import { Layers, Database, Palette } from 'lucide-react';

export default function Building() {
  const steps = [
    {
      icon: <Layers className="w-6 h-6 text-accent-peach" />,
      title: "Thiết lập nền tảng",
      description: "Sử dụng React, Vite và Tailwind CSS làm cấu trúc kỹ thuật cốt lõi. Tôi tiến hành quy hoạch các khối không gian thông tin chính một cách thống nhất bao gồm: phần Giới thiệu, các Dự án thực hành, Quá trình xây dựng và Tổng kết."
    },
    {
      icon: <Database className="w-6 h-6 text-accent-peach" />,
      title: "Hệ thống hóa minh chứng",
      description: "Tập hợp 6 file báo cáo PDF tương ứng với các chủ đề thực hành, định chuẩn lại cách đặt tên và liên kết trực tiếp chúng vào từng thẻ dự án. Điều này giúp người đọc dễ dàng đối chiếu và trải nghiệm sản phẩm gốc."
    },
    {
      icon: <Palette className="w-6 h-6 text-accent-peach" />,
      title: "Biên tập và hoàn thiện",
      description: "Chắt lọc những điểm cốt lõi từ các bài báo cáo dài thành những đoạn mô tả súc tích và dễ đọc. Tôi cũng tích hợp thêm bộ chức năng xem PDF trực tiếp trên giao diện giúp cho Portfolio giữ được sự gọn gàng và tối ưu tra cứu."
    }
  ];

  return (
    <section id="building" className="scroll-mt-24">
      <div className="mb-12 md:text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Cách tôi xây dựng Portfolio</h2>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto text-pretty">
          Quá trình chuyển đổi từ các bài tập học thuật rời rạc thành một sản phẩm Kỹ thuật số hoàn chỉnh.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connection Line */}
        <div className="hidden md:block absolute left-[50%] top-8 bottom-8 w-[2px] bg-stone-300 -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-stone-300 shadow-sm items-center justify-center z-10">
                <span className="w-4 h-4 rounded-full bg-accent-peach"></span>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <div className="claude-card p-6 md:p-8 relative">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center mb-5 border border-stone-100">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Spacer for the other half */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Target, Activity, Zap, BrainCircuit, Code2 } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-24">
      <div className="mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Nhìn lại hành trình</h2>
        <p className="text-stone-600 text-lg max-w-2xl text-pretty">
          Những giá trị cốt lõi đọng lại sau suốt học phần "Nhập môn Công nghệ số và Ứng dụng AI".
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-full"
        >
          <div className="h-full bg-stone-900 text-white rounded-2xl md:rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute right-0 top-0 text-stone-800/50 group-hover:scale-110 transition-transform duration-500 opacity-20 pointer-events-none">
              <Activity className="w-64 h-64 -mt-16 -mr-16" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-16 h-16 shrink-0 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-accent-peach" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-3">Trải nghiệm & Cảm nhận</h3>
                <p className="text-stone-300 leading-relaxed text-[15px] md:text-base text-pretty">
                  Quá trình làm Portfolio này không chỉ để nộp bài cuối kỳ, mà là cơ hội để tôi tự tay xây tổ cho "căn cước kỹ thuật số" của riêng mình. Cảm giác biến những yêu cầu môn học thành một sản phẩm thực tế mang đậm dấu ấn cá nhân thực sự rất truyền cảm hứng. Nhìn lại các bài thực hành đã qua, tôi có thể tự hào thấy rõ bản thân đã trưởng thành lên rất nhiều, cả về tư duy phân tích hệ thống lẫn phong cách làm việc công nghệ.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="claude-card p-6 md:p-8 flex flex-col">
            <div className="mb-4">
               <BrainCircuit className="w-8 h-8 text-accent-peach" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-4 pb-4 border-b border-stone-200/80">Kiến thức & Kỹ năng</h3>
            <div className="space-y-5 flex-grow text-stone-600 text-[15px] leading-relaxed">
              <p>
                <strong className="text-stone-900 font-bold block mb-1">Làm chủ công cụ số & AI:</strong> Biết cách thiết kế cấu trúc thư mục quy chuẩn, khai thác hiệu quả kho dữ liệu học thuật quốc tế. Phá vỡ tư duy hỏi AI thụ động, ứng dụng Prompt Engineering để kiểm soát luồng suy nghĩ đầu ra.
              </p>
              <p>
                <strong className="text-stone-900 font-bold block mb-1">Phối hợp & Triển khai dự án:</strong> Làm quen GitHub để quản lý phiên bản thay vì zip source code. Trải nghiệm luồng tích hợp hệ sinh thái AI hỗ trợ tạo hình, lên nội dung, rèn luyện mạnh mẽ khả năng tự học thực chiến.
              </p>
            </div>
          </div>

          <div className="claude-card p-6 md:p-8 flex flex-col">
            <div className="mb-4">
               <Zap className="w-8 h-8 text-accent-peach" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-4 pb-4 border-b border-stone-200/80">Tâm đắc & Thách thức</h3>
            <div className="space-y-5 flex-grow text-stone-600 text-[15px] leading-relaxed">
              <p>
                <strong className="text-stone-900 font-bold block mb-1">Lựa chọn tự thân:</strong> Thay vì mượn template có sẵn tiện lợi, tôi tự viết code toàn bộ để tạo thành một bộ giao diện mang hơi hướng kỹ thuật. Sự tự chủ này đem lại cảm giác tâm đắc sâu sắc.
              </p>
              <p>
                <strong className="text-stone-900 font-bold block mb-1">Thách thức hệ thống:</strong> Xử lý Reponsive và chèn mượt mà khung xem PDF mà không làm giật lắc máy tính là một rào cản kỹ thuật thú vị. Việc kiểm nghiệm chất lượng chéo các tài liệu từ công nghệ tạo sinh cũng rèn luyện tư duy hoài nghi khoa học.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

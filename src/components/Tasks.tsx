import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Search, PenTool, Users, Sparkles, ShieldCheck, FilePdf, ExternalLink, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tasks() {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const tasks = [
    {
      id: 1,
      category: "HỆ THỐNG",
      number: "01",
      title: "Thao tác cơ bản với tệp tin và thư mục",
      icon: <FileText className="w-5 h-5 text-accent-peach" />,
      desc: "Nắm vững kỹ năng quy hoạch không gian lưu trữ số và bảo mật dữ liệu. Bằng việc thực hành với File Explorer, tôi học được tư duy hệ thống hóa cây thư mục khoa học để quản lý tài nguyên học tập một cách tối ưu, thay vì chỉ tạo tệp tin ngẫu nhiên.",
      details: ["Làm việc với File Explorer hiệu quả", "Tổ chức cấu trúc thư mục rõ ràng cấp bậc", "Phân biệt thao tác xóa tạm và xóa vĩnh viễn"],
      pdfUrl: `${import.meta.env.BASE_URL}CNS_W1.pdf`
    },
    {
      id: 2,
      category: "NGHIÊN CỨU",
      number: "02",
      title: "Tìm kiếm và đánh giá thông tin khoa học thuật",
      icon: <Search className="w-5 h-5 text-accent-peach" />,
      desc: "Định hình tư duy phản biện và năng lực sàng lọc thông tin trong thời đại số. Tôi đã học cách vận dụng toán tử tìm kiếm chuyên sâu để khai thác kho tư liệu học thuật, đồng thời rèn luyện kỹ năng nhận diện nguồn tin rác thông qua lưới tiêu chí CRAAP.",
      details: ["Sử dụng toán tử tìm kiếm nâng cao (Boolean)", "Đánh giá độ tin cậy của nguồn tài liệu (CRAAP)", "Tổng hợp ứng dụng và giới hạn công nghệ thực tiễn"],
      pdfUrl: `${import.meta.env.BASE_URL}CNS_W2.pdf`
    },
    {
      id: 3,
      category: "PROMPT",
      number: "03",
      title: "Viết Prompt hiệu quả cho tác vụ học tập",
      icon: <PenTool className="w-5 h-5 text-accent-peach" />,
      desc: "Chuyển từ tư duy 'tìm kiếm thụ động' sang 'điều hướng chủ động' đối với Trí Tuệ Nhân Tạo. Bằng việc thực hành framework sinh prompt chuyên sâu, tôi học được cách buộc AI suy luận theo chuỗi logic để hỗ trợ phân tích và tổng hợp kiến thức phức tạp.",
      details: ["Xác định vai trò và bối cảnh cụ thể cho AI", "Thiết lập khung cấu trúc và đặt ràng buộc rõ ràng", "Đánh giá, tinh chỉnh lặp prompt qua chuỗi kết quả"],
      pdfUrl: `${import.meta.env.BASE_URL}CNS_W3.pdf`
    },
    {
      id: 4,
      category: "HỢP TÁC",
      number: "04",
      title: "Công cụ hợp tác trực tuyến cho dự án nhóm",
      icon: <Users className="w-5 h-5 text-accent-peach" />,
      desc: "Làm chủ phương pháp làm việc bất đồng bộ (Asynchronous) trong môi trường số. Thông qua dự án thực tế, tôi tiếp thu kinh nghiệm quản lý luồng tiến độ, vượt qua nỗi sợ xung đột (conflict) mã nguồn và kiểm soát giao tiếp liền mạch trên hệ sinh thái Agile.",
      details: ["Theo dõi vòng đời tiến độ To do - Doing - Done", "Chuẩn hóa tài liệu kỹ thuật và file minh chứng", "Giao tiếp, tháo gỡ lỗi kỹ thuật đa luồng theo nhánh"],
      pdfUrl: `${import.meta.env.BASE_URL}CNS_W4.pdf`
    },
    {
      id: 5,
      category: "SÁNG TẠO",
      number: "05",
      title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
      icon: <Sparkles className="w-5 h-5 text-accent-peach" />,
      desc: "Phá vỡ rào cản kỹ năng đồ họa truyền thống để trở thành người điều phối sáng tạo. Bài học mang lại tư duy tổng đạo diễn: biết cách lắp ghép sức mạnh của nhiều nền tảng AI khác nhau vào chung một chiến dịch, vẫn duy trì cảm quan thiết kế cá nhân.",
      details: ["Lên ý tưởng đa chiều và phát triển đề cương", "Tạo sinh minh họa độ phân giải cao bằng AI", "Biên tập, trau chuốt lại để giữ vững tính cá nhân"],
      pdfUrl: `${import.meta.env.BASE_URL}CNS_W5.pdf`
    },
    {
      id: 6,
      category: "ĐẠO ĐỨC",
      number: "06",
      title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      icon: <ShieldCheck className="w-5 h-5 text-accent-peach" />,
      desc: "Xây dựng bức tường phòng vệ đạo đức trước cám dỗ của công nghệ tiện lợi. Tôi học được cách nhận diện ảo giác (hallucination) của AI, hiểu nguyên tắc bảo vệ quyền sở hữu trí tuệ và khẳng định vị thế sinh viên không bị máy móc thao túng (Human-in-the-loop).",
      details: ["Đề xuất bộ 5 nguyên tắc sử dụng AI chuẩn mực", "Minh bạch hóa prompt và vai trò hỗ trợ của AI", "Nhận diện rủi ro 'Cognitive Atrophy' khi quá phụ thuộc"],
      pdfUrl: `${import.meta.env.BASE_URL}CNS_W6.pdf`
    }
  ];

  return (
    <section id="tasks" className="scroll-mt-24">
      <div className="mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Các bài tập đã hoàn thành</h2>
        <p className="text-stone-600 text-lg max-w-2xl text-pretty">
          Tập hợp 6 bài thực hành bao quát từ các kỹ năng quản trị máy tính cá nhân đến ứng dụng Trí tuệ 
          nhân tạo thế hệ mới.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <motion.div 
            key={task.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -8 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="claude-card p-7 flex flex-col h-full z-10"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-serif text-4xl font-bold text-orange-500 drop-shadow-sm">{task.number}</span>
              <div className="p-3 bg-stone-50 rounded-xl shadow-inner border border-stone-200">{task.icon}</div>
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-3 leading-snug tracking-tight pr-4">
              {task.title}
            </h3>
            <p className="text-stone-600 text-[15px] mb-6 flex-grow leading-relaxed">
              {task.desc}
            </p>
            <div className="border-t border-stone-100 pt-5 mt-auto">
              <ul className="space-y-3 mb-6">
                {task.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-[13px] text-stone-600 font-medium">
                    <span className="mr-2 text-accent-peach font-bold">◈</span>
                    {detail}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 mt-auto">
                 <Link to={`/task/${task.id}`} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold whitespace-nowrap bg-stone-900 text-white rounded-xl hover:bg-stone-800 shadow-md hover:shadow-lg transition-all focus:ring-4 focus:ring-stone-200">
                    Mở tài liệu
                    <ExternalLink className="w-4 h-4 shrink-0" />
                 </Link>
                 <button 
                    onClick={() => setActivePdf(task.pdfUrl)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold whitespace-nowrap bg-white text-stone-700 border border-stone-200 rounded-xl shadow-sm hover:bg-stone-50 hover:text-stone-900 hover:border-stone-300 transition-all focus:ring-4 focus:ring-stone-200"
                 >
                    Xem PDF
                 </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PDF Modal Styled like Claude Tool/Attachment */}
      <AnimatePresence>
        {activePdf && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setActivePdf(null)}
               className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div
               initial={{ scale: 0.95, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.95, opacity: 0, y: 20 }}
               className="relative w-full max-w-4xl h-[85vh] bg-stone-50 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-stone-200/50"
            >
               {/* Modal Header */}
               <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-stone-100 shrink-0">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-accent-peach">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                     </div>
                     <div>
                        <h3 className="font-medium text-stone-900">Tài liệu đính kèm</h3>
                        <p className="text-xs text-stone-500">PDF Viewer</p>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                     <a 
                       href={activePdf} 
                       download
                       className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors flex items-center gap-1 text-sm font-medium"
                     >
                       <Download className="w-4 h-4" />
                       <span className="hidden sm:inline">Tải về</span>
                     </a>
                     <div className="w-px h-4 bg-stone-200 mx-1"></div>
                     <button 
                       onClick={() => setActivePdf(null)}
                       className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                     >
                       <X className="w-5 h-5" />
                     </button>
                  </div>
               </div>
               
               {/* PDF Content Area */}
               <div className="flex-1 bg-stone-200/50 p-4 md:p-6 overflow-hidden flex flex-col">
                  <div className="flex-1 bg-white rounded-xl shadow-sm border border-stone-200 w-full overflow-hidden flex items-center justify-center relative">
                     {activePdf !== "#" ? (
                        <iframe src={activePdf} className="w-full h-full absolute inset-0" title="PDF Viewer" />
                     ) : (
                        <div className="text-center text-stone-400">
                           <FileText className="w-12 h-12 mx-auto mb-3 opacity-20" />
                           <p>Khu vực hiển thị tài liệu PDF trực tiếp</p>
                           <p className="text-xs mt-1">(Cần tải tài liệu PDF thực tế lên thư mục assets/ và đổi URL)</p>
                        </div>
                     )}
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

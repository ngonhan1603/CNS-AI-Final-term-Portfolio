import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, FileText, CheckCircle2, Terminal, Lightbulb, ShieldAlert, GitBranch, Share2, Compass, Cpu, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

type TaskResult = {
  title: string;
  ask: string;
  answer: React.ReactNode;
};

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div variants={itemVariants} className={className}>
    {children}
  </motion.div>
);

const HoverScaleNode = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div whileHover={{ scale: 1.02, y: -5 }} className={`transition-colors transition-shadow duration-300 ${className}`}>
    {children}
  </motion.div>
);

const taskData: Record<number, TaskResult> = {
  1: {
    title: "Thao tác cơ bản với tệp tin và thư mục",
    ask: "Hãy tổng hợp lại quá trình thực hành và phân tích sâu về những kỹ năng quản lý tài nguyên số mà tôi đã rèn luyện được trong chuyên đề Hệ thống và Quản lý Tệp tin.",
    answer: (
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        <AnimatedSection className="text-lg text-stone-700 font-medium leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-stone-100/80 hover:shadow-md transition-shadow">
          Quản lý tệp tin không chỉ là việc lưu trữ, mà là <strong className="text-blue-600 font-bold">kiến tạo một hệ sinh thái không gian làm việc số khoa học.</strong> Quá trình từ việc lưu trữ bừa bãi đến khi tự tin thiết lập toàn bộ kiến trúc nhánh - tệp có tổ chức giúp tôi tiết kiệm hàng giờ mỗi tuần trong việc truy xuất dữ liệu.
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HoverScaleNode className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/60 rounded-2xl shadow-lg p-6 relative overflow-hidden group min-w-0">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500" />
            <h4 className="font-semibold text-indigo-900 text-lg mb-4 flex items-center gap-3">
              <span className="p-2 bg-indigo-600 text-white rounded-lg shadow-md"><Compass className="w-5 h-5" /></span>
              Tư duy Kiến trúc Không gian
            </h4>
            <p className="text-sm text-indigo-800/80 mb-5 leading-relaxed">
              Từ bỏ thói quen lưu ngẫu nhiên trên Desktop. Hệ thống <strong>Phân cấp Tuyến tính (Hierarchical Structure)</strong> được áp dụng nghiêm ngặt theo mô hình hình cây:
            </p>
            <div className="bg-slate-900 rounded-xl p-5 shadow-inner border border-slate-700 overflow-x-auto">
              <div className="font-mono text-[13px] text-green-400 space-y-1.5 opacity-90">
                <div className="flex items-center gap-2"><span className="text-slate-500">~</span> <span>📁 University_Workspace</span></div>
                <div className="flex items-center gap-2 ml-4"><span className="text-slate-600">├─</span> <span className="text-blue-300">📁 Semester_01</span></div>
                <div className="flex items-center gap-2 ml-8"><span className="text-slate-600">├─</span> 📁 Tin_Hoc_Co_So</div>
                <div className="flex items-center gap-2 ml-8"><span className="text-slate-600">└─</span> 📁 Ky_Nang_Mem</div>
                <div className="flex items-center gap-2 ml-4"><span className="text-slate-600">└─</span> <span className="text-blue-300">📁 Personal_Projects</span></div>
              </div>
            </div>
          </HoverScaleNode>

          <HoverScaleNode className="bg-gradient-to-br from-white to-stone-50 border border-stone-200/80 rounded-2xl shadow-lg p-6 overflow-hidden min-w-0">
            <h4 className="font-semibold text-stone-900 text-lg mb-4 flex items-center gap-3">
              <span className="p-2 bg-stone-900 text-white rounded-lg shadow-md"><Terminal className="w-5 h-5" /></span>
              Quy chuẩn Định danh
            </h4>
            <p className="text-sm text-stone-600 mb-5 leading-relaxed">
              Việc áp dụng Format đặt tên nhất quán giúp quá trình Indexing (lập chỉ mục) của thư mục trở nên hoàn hảo, nói không với lỗi font chữ.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-stone-100 shadow-sm transition-colors hover:border-emerald-200 hover:shadow-md">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">Pattern Chuẩn</div>
                  <div className="font-mono text-[13px] font-medium text-stone-800 break-all">[YYYYMMDD]_[Course]_[Topic]_[Version]</div>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white rounded-lg border border-stone-100 shadow-sm transition-colors hover:border-emerald-200 hover:shadow-md">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">Ví Dụ Thực Tế</div>
                  <div className="font-mono text-[13px] font-medium text-stone-800 break-all">20231015_TinHocCS_BaoCao_vFINAL.pdf</div>
                </div>
              </li>
            </ul>
          </HoverScaleNode>
        </div>

        <AnimatedSection className="bg-stone-900 rounded-2xl overflow-hidden shadow-2xl relative min-w-0">
          <div className="absolute top-0 right-0 p-8 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-800/60 via-stone-900 to-stone-900 pointer-events-none" />
          <div className="relative z-10 px-6 py-5 border-b border-stone-800 flex justify-between items-center text-white">
            <span className="font-semibold text-lg tracking-wide">Bảng Kỹ năng Quản trị Vòng đời</span>
            <Sparkles className="w-5 h-5 text-accent-peach" />
          </div>
          <div className="p-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-800/50 p-5 rounded-xl border border-stone-700/50 hover:bg-stone-800 transition-colors">
              <div className="text-accent-peach font-bold mb-2">Quản trị Rủi ro</div>
              <p className="text-stone-400 text-sm leading-relaxed">Sử dụng Read-Only để khóa cứng các tệp lõi, thiết lập cơ chế tự động dọn rác và quy tắc khôi phục Recycle Bin an toàn - thứ cứu tôi khỏi nhiều bàn thua trông thấy.</p>
            </div>
            <div className="bg-stone-800/50 p-5 rounded-xl border border-stone-700/50 hover:bg-stone-800 transition-colors">
              <div className="text-emerald-400 font-bold mb-2">Tối ưu Thao tác (Shortcuts)</div>
              <p className="text-stone-400 text-sm leading-relaxed">Giảm thiểu sự phụ thuộc vào chuột. Các thao tác sao chép, di chuyển tệp, phân chia hai màn hình không gian được xử lý toàn bộ qua phím cơ giúp tăng đôi tốc độ xử lý.</p>
            </div>
          </div>
        </AnimatedSection>
      </motion.div>
    )
  },
  2: {
    title: "Tìm kiếm và đánh giá thông tin khoa học thuật",
    ask: "Khả năng phân tích và đánh giá thông tin của tôi được biến đổi thế nào sau khi làm quen với các nền tảng cơ sở dữ liệu học thuật quốc tế?",
    answer: (
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        <AnimatedSection className="text-lg text-stone-700 font-medium leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
          Bước ra khỏi hệ sinh thái tìm kiếm phổ thông cơ bản (Google Search thô), tôi đã chính thức trang bị <strong>tư duy của người làm nghiên cứu</strong>: Sàng lọc thông tin dựa trên cơ chế hoài nghi khoa học và các tiêu chí chuẩn mực quốc tế.
        </AnimatedSection>

        <HoverScaleNode className="bg-gradient-to-br from-amber-50 to-orange-100/50 border border-amber-200/60 p-6 sm:p-8 rounded-2xl shadow-xl">
           <h4 className="font-bold text-amber-900 text-xl mb-4 flex items-center gap-3">
             <span className="p-2.5 bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-500/30"><Terminal className="w-5 h-5" /></span>
             Kỹ thuật Truy vấn Cấp cao (Advanced Boolean Logic)
           </h4>
           <div className="space-y-5">
              <p className="text-sm text-amber-800/90 font-medium">Để tìm kiếm tài liệu chuẩn khoa học trên hệ thống quốc tế, câu truy vấn thô sơ đã được thay thế hoàn toàn bằng chuỗi toán tử chính xác:</p>
              
              <div className="bg-amber-950/80 p-5 rounded-xl shadow-inner border border-amber-900 relative">
                <div className="absolute top-2 right-3 text-[10px] text-amber-500 font-bold tracking-widest uppercase">Query Logic</div>
                <div className="font-mono text-sm text-amber-50 leading-relaxed mt-2">
                  <span className="text-emerald-400">("Artificial Intelligence"</span> <span className="text-amber-400 font-bold">OR</span> <span className="text-emerald-400">"Machine Learning")</span> <br className="sm:hidden" />
                  <span className="text-amber-400 font-bold mx-2">AND</span> <span className="text-blue-300">"Automated Testing"</span> <br className="sm:hidden" />
                  <span className="text-red-400 font-bold mx-2">NOT</span> <span className="text-red-200">"Manual"</span> <span className="text-stone-400 ml-2">filetype:pdf</span>
                </div>
              </div>
              
              <div className="bg-white/60 p-4 rounded-xl border border-amber-100/50 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 font-medium leading-relaxed">Kết quả: Giảm 85% kết quả rác, chỉ tập trung xuất ra các nghiên cứu lõi từ IEEE Xplore và ACM Digital Library. Tiết kiệm công sức đọc lướt hàng chục trang vô nghĩa.</p>
              </div>
           </div>
        </HoverScaleNode>

        <AnimatedSection className="bg-white border text-sm border-stone-200 rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 border-b border-emerald-700/50 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-white" />
            <span className="font-bold text-white text-lg tracking-wide text-shadow-sm">Nền tảng Thẩm định Lưới C.R.A.A.P</span>
          </div>
          <div className="p-0">
             <div className="grid sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
                {[
                  { l: "C", name: "Currency", sub: "Độ cập nhật < 5 năm", col: "text-blue-600", bg: "bg-blue-50" },
                  { l: "R", name: "Relevance", sub: "Bám sát trọng tâm", col: "text-indigo-600", bg: "bg-indigo-50" },
                  { l: "A", name: "Authority", sub: "Tác giả uy tín", col: "text-purple-600", bg: "bg-purple-50" },
                  { l: "A", name: "Accuracy", sub: "Đã Peer-review", col: "text-pink-600", bg: "bg-pink-50" },
                  { l: "P", name: "Purpose", sub: "Không bias học thuật", col: "text-rose-600", bg: "bg-rose-50" }
                ].map((item, idx) => (
                  <motion.div whileHover={{ y: -5, scale: 1.05 }} key={idx} className="p-6 bg-white text-center hover:shadow-xl transition-shadow relative z-0 hover:z-10 cursor-default group">
                     <div className={`w-12 h-12 mx-auto rounded-2xl ${item.bg} ${item.col} flex items-center justify-center text-2xl font-black mb-3 shadow-inner group-hover:scale-110 transition-transform`}>
                       {item.l}
                     </div>
                     <div className="font-bold text-stone-900 mb-1.5">{item.name}</div>
                     <div className="text-[11px] text-stone-500 font-medium">{item.sub}</div>
                  </motion.div>
                ))}
             </div>
          </div>
        </AnimatedSection>
      </motion.div>
    )
  },
  3: {
    title: "Viết Prompt hiệu quả cho tác vụ học tập",
    ask: "Hãy đi sâu vào quá trình dịch chuyển từ giao tiếp cơ bản đến khả năng 'điều khiển' AI qua framework chuyên nghiệp, tôi đã đạt được những bước tiến nào?",
    answer: (
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        <AnimatedSection className="text-lg text-stone-700 font-medium leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
          Khoảnh khắc tôi nhận ra "AI chỉ thông minh bằng chính câu lệnh bạn đặt ra". Quy trình học này đánh dấu sự chuyển mình từ một người "dùng AI thụ động" thành <strong className="text-emerald-600 font-bold">"kiến trúc sư luồng suy nghĩ" (Prompt Engineering)</strong>.
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-6">
           <HoverScaleNode className="bg-stone-50/80 rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-md">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600 bg-stone-200 px-3 py-1.5 rounded-lg mb-6 shadow-sm">
                 <Cpu className="w-4 h-4" />
                 Trước đây (Zero-shot)
              </div>
              <div className="font-mono text-[13px] text-stone-900 bg-white p-5 rounded-xl border-l-4 border-l-stone-300 shadow-sm mb-6 relative">
                 <div className="absolute -left-[2px] top-4 w-4 h-4 bg-stone-300 rounded-r-md"></div>
                 "Hãy giải thích cách hoạt động của Machine Learning và cho tôi vài câu hỏi."
              </div>
              <ul className="text-sm text-stone-600 font-medium space-y-3">
                 <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Kết quả trả về chung chung, lan man</li>
                 <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Thiếu cấu trúc chuyên môn hóa</li>
                 <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Âm điệu quá giống từ điển bách khoa</li>
              </ul>
           </HoverScaleNode>

           <HoverScaleNode className="bg-gradient-to-b from-emerald-50 to-teal-50/30 rounded-2xl p-6 md:p-8 border border-emerald-200 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-bl-[100px] pointer-events-none" />
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/80 px-3 py-1.5 rounded-lg mb-6 shadow-sm">
                 <Lightbulb className="w-4 h-4 text-emerald-600" />
                 Hiện tại (C.R.E.A.T.E. Framework)
              </div>
              <div className="font-mono text-[12px] leading-relaxed text-emerald-950 bg-white p-5 rounded-xl border-l-4 border-l-emerald-500 shadow-md mb-6 relative">
                 <div className="absolute -left-[2px] top-4 w-4 h-4 bg-emerald-500 rounded-r-md"></div>
                 "Đóng vai 1 giáo sư Khoa học máy tính (C). Tôi là SV năm 1 (R). Nội dung trả lời chia làm 3 cấp độ khó tăng dần (E), và tạo 5 câu Multiple Choice dựa trên quy tắc Active Recall (A)..."
              </div>
              <ul className="text-sm text-emerald-900 font-medium space-y-3">
                 <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> AI tuân thủ tuyệt đối cấu trúc khuôn dạng</li>
                 <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Giọng điệu chuyên môn hóa, truyền cảm hứng</li>
                 <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Tạo ra phương pháp ôn tập cực kỳ cá nhân hóa</li>
              </ul>
           </HoverScaleNode>
        </div>

        <AnimatedSection className="bg-stone-900 rounded-2xl overflow-hidden shadow-2xl relative p-8">
           <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="w-16 h-16 shrink-0 bg-accent-peach/20 rounded-full flex items-center justify-center">
                <Layers className="w-8 h-8 text-accent-peach" />
             </div>
             <div>
               <h4 className="font-bold text-white text-xl mb-3">Phép màu của "Chain-of-Thought"</h4>
               <p className="text-stone-300 leading-relaxed text-[15px]">
                 Bằng cách yêu cầu AI bắt buộc định dạng <strong className="text-accent-peach font-mono font-normal tracking-tight px-1 bg-white/10 rounded">"Hãy suy luận từng bước trước khi đưa ra đáp án cuối cùng"</strong>, tôi đã triệt tiêu chứng "ảo giác thông tin" (hallucination). Thông lượng Output trở nên minh bạch logic, có trích dẫn rõ ràng, đạt tiêu chuẩn khắt khe để sử dụng trong báo cáo học thuật chuyên môn cao.
               </p>
             </div>
           </div>
        </AnimatedSection>
      </motion.div>
    )
  },
  4: {
    title: "Công cụ hợp tác trực tuyến cho dự án nhóm",
    ask: "Kinh nghiệm thực chiến của tôi về quản lý dự án nhóm từ xa qua Git và các nền tảng Agile được đánh giá ở mức độ nào?",
    answer: (
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        <AnimatedSection className="text-lg text-stone-700 font-medium leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
          Giao tiếp số và quản lý bất đồng bộ (Asynchronous collaboration) cực kỳ phức tạp. Trải qua dự án nhóm thực tế, tôi đã xây dựng thành công một <strong className="text-indigo-600 font-bold">Workflow chuyên nghiệp tiệm cận với môi trường doanh nghiệp phần mềm.</strong>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          <HoverScaleNode className="bg-gradient-to-b from-white to-stone-50 border border-stone-200/80 p-6 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors" />
            <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
              <Share2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-lg mb-3">Tư duy Quản trị Task</h4>
            <p className="text-[13px] text-stone-600 leading-relaxed font-medium">Ứng dụng thuần thục ClickUp board. Áp dụng luồng Kanban để theo dõi minh bạch tiến độ Todo - In Progress - Review - Done, ngăn chặn tuyệt đối tình trạng bottleneck (nút thắt cổ chai).</p>
          </HoverScaleNode>
          
          <HoverScaleNode className="bg-gradient-to-b from-white to-stone-50 border border-stone-200/80 p-6 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors" />
            <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
              <GitBranch className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-lg mb-3">Kiểm soát Phiên bản</h4>
            <p className="text-[13px] text-stone-600 leading-relaxed font-medium">Sử dụng GitHub thay vì gửi file qua Zalo. Không còn e sợ "Merge Conflict", liên tục thực hành Pull Requests chuẩn mực, quy trình Review Code trước khi push vào luồng chính thức.</p>
          </HoverScaleNode>
          
          <HoverScaleNode className="bg-gradient-to-b from-white to-stone-50 border border-stone-200/80 p-6 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors" />
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-lg mb-3">Giao tiếp Kỹ thuật</h4>
            <p className="text-[13px] text-stone-600 leading-relaxed font-medium">Vượt qua rào cản địa lý và giờ giấc. Thiết lập hệ thống Document (API Specs/Requirement) trên Google Docs và duy trì Daily Standup ảo qua nền tảng Discord/Meet mạch lạc.</p>
          </HoverScaleNode>
        </div>

        <AnimatedSection className="bg-stone-900 text-stone-100 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
           <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[150px] opacity-5 select-none font-serif">"</div>
           <div className="relative z-10 font-mono text-[15px]">
             <div className="text-emerald-400 font-bold mb-4">// Bài học cốt lõi lớn nhất rút ra:</div>
             <div className="leading-relaxed whitespace-pre-wrap pl-4 border-l-2 border-stone-700">
               "Công cụ mãi mãi chỉ là công cụ. Trọng tâm của hợp tác nhóm từ xa nằm ở <strong>Kỷ Luật Đồng Bộ</strong> và <strong>Sự Minh Bạch Toàn Tập (Transparency)</strong>. Việc commit code nhỏ giọt điều độ, tài liệu hóa sớm và sẵn sàng hỗ trợ thành viên khác là chìa khóa tháo gỡ điểm nghẽn."
             </div>
           </div>
        </AnimatedSection>
      </motion.div>
    )
  },
  5: {
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    ask: "Làm thế nào tôi đã điều phối cả hệ sinh thái Generative AI đa nền tảng để phục vụ sản xuất chiến dịch sáng tạo một cách có hồn, nhân bản?",
    answer: (
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        <AnimatedSection className="text-lg text-stone-700 font-medium leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
          Đây là bài học đánh dấu sự trưởng thành từ vị thế "chờ AI tạo ra sản phẩm hoàn chỉnh" vươn lên thành <strong className="text-rose-600 font-bold">Giám đốc Sáng tạo (Creative Director)</strong> - người lắp ghép từng mảnh ghép thần kỳ của nhiều AI lõi vào chung một bức tranh.
        </AnimatedSection>

        <div className="relative pt-6">
           {/* Timeline line */}
           <div className="absolute left-[39px] sm:left-[47px] top-10 bottom-10 w-1 bg-gradient-to-b from-indigo-200 via-rose-200 to-emerald-200 rounded-full" />
           
           <div className="space-y-10">
              <AnimatedSection className="relative pl-24 sm:pl-32 group">
                 <div className="absolute left-4 sm:left-6 top-0 w-16 h-16 sm:w-20 sm:h-20 bg-white border-4 border-indigo-100 shadow-xl rounded-2xl flex items-center justify-center z-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <span className="font-serif font-black text-2xl text-indigo-900">01</span>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-lg group-hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Text-to-Thinking (Khởi tạo Ý tưởng)</h4>
                    <p className="text-stone-600 leading-relaxed text-[14px]">
                       Sử dụng mô hình ngôn ngữ lớn làm đối tác tư duy (Brainstorming Partner). AI đảm nhiệm phân tích dữ liệu insight, phác thảo khung xương chiến dịch và các Keyword chủ đạo. <strong className="text-indigo-600">AI mở đường, con người chốt hạ chiến lược.</strong>
                    </p>
                 </div>
              </AnimatedSection>

              <AnimatedSection className="relative pl-24 sm:pl-32 group">
                 <div className="absolute left-4 sm:left-6 top-0 w-16 h-16 sm:w-20 sm:h-20 bg-white border-4 border-rose-100 shadow-xl rounded-2xl flex items-center justify-center z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <span className="font-serif font-black text-2xl text-rose-900">02</span>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-lg group-hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Text-to-Visual (Kiến tạo Thị giác)</h4>
                    <p className="text-stone-600 leading-relaxed text-[14px]">
                       Chuyển hóa khái niệm trừu tượng thành hình ảnh sắc nét bằng Midjourney/DALL-E. Thay vì nhập văn bản ngắn, tôi ép AI tuân thủ góc máy ảnh, bảng màu (Color Palette), ánh sáng (Lighting) thông qua các prompt kĩ thuật sâu, <strong className="text-rose-600">tự do thiết kế hình ảnh không rào cản.</strong>
                    </p>
                 </div>
              </AnimatedSection>

              <AnimatedSection className="relative pl-24 sm:pl-32 group">
                 <div className="absolute left-4 sm:left-6 top-0 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-600 border-4 border-white shadow-xl shadow-emerald-600/30 rounded-2xl flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-serif font-black text-2xl text-white">03</span>
                 </div>
                 <div className="bg-stone-900 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-500/10 rounded-tl-full blur-3xl pointer-events-none" />
                    <h4 className="text-xl font-bold text-white mb-3">Human-in-the-Loop (Chế tác Tinh hoa)</h4>
                    <p className="text-stone-300 leading-relaxed text-[15px] font-medium border-l-2 border-emerald-500 pl-4">
                       Đỉnh cao của tư duy nằm ở đây: Khước từ những kết quả "nhựa" nguyên bản của AI. Tôi tự tay đưa asset hình ảnh vào Canva/Figma, cân chỉnh typography, lọc bỏ những đoạn văn sáo rỗng (robotic) đi. <strong className="text-emerald-400">Đẩy hồn cốt và giá trị con người lên làm yếu tố quyết định.</strong>
                    </p>
                 </div>
              </AnimatedSection>
           </div>
        </div>
      </motion.div>
    )
  },
  6: {
    title: "Sử dụng AI có trách nhiệm",
    ask: "Khắc họa quan điểm triết lý của tôi trong việc phòng trừ hội chứng 'teo não kỹ thuật số' và vạch rõ lằn ranh liêm chính học thuật đối với AI.",
    answer: (
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        <AnimatedSection className="text-lg text-stone-700 font-medium leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
          Bước qua sự phấn khích của công nghệ, bài học này chứng minh một sự tĩnh lặng và bản lĩnh tự nhận thức rất cao. Tôi đã nhìn nhận AI không phải một nền tảng cướp việc, cũng không phải chiếc phao bơi vạn năng, mà là <strong className="text-accent-peach font-bold">một ngoại lực cực thịnh cần cẩn trọng kiểm soát.</strong>
        </AnimatedSection>

        <AnimatedSection className="bg-gradient-to-br from-stone-900 to-black rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-peach/5 rounded-full blur-[100px] pointer-events-none" />
          <h4 className="font-serif text-3xl font-semibold text-white mb-8 border-b border-stone-800 pb-5 uppercase tracking-wider text-center">
             Bản Tuyên Ngôn Trách Nhiệm Số
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
             <HoverScaleNode className="bg-stone-800/40 border border-stone-700/50 p-6 rounded-2xl hover:bg-stone-800/80 transition-colors">
                <div className="w-12 h-12 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl flex items-center justify-center mb-5 font-black text-xl">1</div>
                <h5 className="font-bold text-white text-lg mb-3">Chống Đạo văn Vô thức</h5>
                <p className="text-[13px] text-stone-400 leading-relaxed font-medium">Nghiêm cấm hành vi copy-paste trực tiếp output mang đi nộp. Tôi ý thức rõ hậu quả tàn khốc của việc ký tên mình lên một tiểu luận nhưng não bộ không hề trải qua nỗi đau tư duy.</p>
             </HoverScaleNode>
             
             <HoverScaleNode className="bg-stone-800/40 border border-stone-700/50 p-6 rounded-2xl hover:bg-stone-800/80 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl flex items-center justify-center mb-5 font-black text-xl">2</div>
                <h5 className="font-bold text-white text-lg mb-3">Nghệ thuật Minh bạch</h5>
                <p className="text-[13px] text-stone-400 leading-relaxed font-medium">Dũng cảm khai báo phương pháp luận. Đưa toàn bộ "AI Prompts" vào phần phụ lục minh chứng thay vì giấu giếm, rạch ròi thừa nhận giới hạn tự nhiên của tư duy bản thân.</p>
             </HoverScaleNode>

             <HoverScaleNode className="bg-stone-800/40 border border-stone-700/50 p-6 rounded-2xl hover:bg-stone-800/80 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-5 font-black text-xl">3</div>
                <h5 className="font-bold text-white text-lg mb-3">Vượt qua Ảo giác</h5>
                <p className="text-[13px] text-stone-400 leading-relaxed font-medium">Luôn trang bị tư duy Fact-check. Bất cứ lý thuyết, số liệu, đường dẫn url nào AI đưa ra đều phải được thẩm định chéo với con người trước khi xác tín làm báo cáo chủ lực.</p>
             </HoverScaleNode>
          </div>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-orange-50 to-white text-stone-900 border border-orange-200/60 p-8 rounded-2xl shadow-xl">
           <div className="text-5xl shrink-0 p-4 bg-white rounded-full shadow-inner border border-orange-100">⚖️</div>
           <div>
              <p className="font-serif italic text-lg leading-relaxed text-stone-700 pr-4">
                "Kỹ năng cốt lõi của sinh viên ngành công nghệ là giải trí tuệ và tư duy máy tính. Nếu giao phó phím tắt giải toán đỗ đạt toàn bộ cho AI, <strong className="text-stone-900">thứ ta mất đi không chỉ là tấm bằng, mà là cả một hệ thần kinh sinh tồn cốt lõi của não bộ.</strong>"
              </p>
           </div>
        </AnimatedSection>
      </motion.div>
    )
  }
};

export default function TaskDetail() {
  const { id } = useParams();
  const task = taskData[Number(id)];
  
  if (!task) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
         <div className="text-center">
            <h2 className="text-2xl font-serif text-stone-900 mb-2">Không tìm thấy bài phân tích</h2>
            <Link to="/" className="text-accent-peach font-medium hover:underline">Quay lại Tổng quan Portfolio</Link>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50/50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link 
            to="/#tasks" 
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-sm font-bold bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Quay lại Khung Bài Tập</span>
            <span className="sm:hidden">Trở lại</span>
          </Link>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-indigo-800">Phân Tích Chuyên Sâu</span>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-10 lg:mb-16 pb-10 border-b border-stone-200"
        >
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg mb-6 shadow-md">
              Chuyên đề phân tích số {id}
           </div>
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight md:leading-tight">
             {task.title}
           </h1>
        </motion.div>

        {/* User Prompt Box */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
           className="flex flex-col md:flex-row gap-6 md:gap-8 relative z-10"
        >
          <div className="shrink-0 flex items-center md:items-start md:w-12">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-stone-200 to-stone-300 border border-stone-300 text-stone-700 flex items-center justify-center font-bold text-lg shadow-sm ring-4 ring-white">
              N
            </div>
            <h4 className="md:hidden ml-4 text-stone-900 font-bold text-base">Câu hỏi đặt ra</h4>
          </div>
          <div className="flex-1 bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-xl shadow-stone-200/50 relative hover:-translate-y-1 transition-transform">
            <div className="absolute top-8 -left-3 w-6 h-6 bg-white border-t border-l border-stone-200 rotate-[-45deg] rounded-tl-sm hidden md:block" />
            <div className="text-stone-800 text-base md:text-[17px] font-semibold leading-relaxed tracking-wide">
               "{task.ask}"
            </div>
          </div>
        </motion.div>

        {/* AI Answer Box */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
           className="flex flex-col md:flex-row gap-6 md:gap-8"
        >
          <div className="shrink-0 flex items-center md:items-start md:w-12 mt-4 md:mt-0">
            <div className="w-12 h-12 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-lg ring-4 ring-white">
              <Sparkles className="w-6 h-6 text-accent-peach animate-pulse" />
            </div>
            <h4 className="md:hidden ml-4 text-stone-900 font-bold text-base">Báo Cáo Tổng Hợp</h4>
          </div>
          <div className="flex-1 min-w-0 pb-20 overflow-hidden">
            <div className="bg-stone-50 p-6 md:p-10 rounded-[2rem] border border-stone-200/80 shadow-2xl shadow-stone-200/60 relative">
               <div className="absolute top-8 -left-3 w-6 h-6 bg-stone-50 border-t border-l border-stone-200/80 rotate-[-45deg] rounded-tl-sm hidden md:block" />
               <div className="max-w-none overflow-hidden">
                 {task.answer}
               </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

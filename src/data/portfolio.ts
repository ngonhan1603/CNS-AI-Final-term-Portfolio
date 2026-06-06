export const chatList = [
  { id: 'intro', title: '👋 Giới thiệu bản thân' },
  { id: 'project1', title: 'Bài 1: Quản lý Tệp tin' },
  { id: 'project2', title: 'Bài 2: Đánh giá thông tin' },
  { id: 'project3', title: 'Bài 3: Prompt Engineering' },
  { id: 'project4', title: 'Bài 4: Công cụ hợp tác' },
  { id: 'project5', title: 'Bài 5: AI sáng tạo nội dung' },
  { id: 'project6', title: 'Bài 6: AI có trách nhiệm' },
  { id: 'conclusion', title: '✨ Tổng kết dự án' },
];

export const getMessagesForChat = (id: string) => {
  const titles: Record<string, string> = {
    intro: "bản Giới thiệu",
    project1: "Bài tập 1 (Thao tác cơ bản với tệp tin và thư mục)",
    project2: "Bài tập 2 (Tìm kiếm và đánh giá thông tin khoa học thuật)",
    project3: "Bài tập 3 (Viết Prompt hiệu quả cho học tập)",
    project4: "Bài tập 4 (Sử dụng công cụ hợp tác trực tuyến cho dự án)",
    project5: "Bài tập 5 (Sử dụng AI tạo sinh để sáng tạo nội dung)",
    project6: "Bài tập 6 (Ứng dụng AI có trách nhiệm trong học tập)",
    conclusion: "phần Tổng kết dự án Portfolio"
  };
  
  return [
    {
      role: 'user',
      content: `Claude ơi, hãy hiển thị chi tiết ${titles[id]} của tôi nhé.`
    },
    {
      role: 'assistant',
      contentId: id
    }
  ];
};

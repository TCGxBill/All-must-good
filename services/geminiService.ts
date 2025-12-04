import { GoogleGenAI } from "@google/genai";
import { PageId } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Map page context to specific historical focus
const getContextPrompt = (pageId: PageId): string => {
  switch (pageId) {
    case 'duoi-dat':
      return "NGỮ CẢNH: Người dùng đang tìm hiểu về ĐỊA ĐẠO (Củ Chi, Vĩnh Mốc) và HỆ THỐNG HẦM NGẦM. Từ khóa: 'Thành phố trong lòng đất', 'Bếp Hoàng Cầm', 'Cuộc sống dưới lòng đất', 'Sự kiên cường'.";
    case 'mat-dat':
      return "NGỮ CẢNH: Người dùng đang tìm hiểu về ĐƯỜNG TRƯỜNG SƠN (Đường mòn Hồ Chí Minh). Từ khóa: 'Vận tải quân sự', 'Tiểu đội xe không kính', 'Huyền thoại 559', 'Xẻ dọc Trường Sơn đi cứu nước'.";
    case 'tren-khong':
      return "NGỮ CẢNH: Người dùng đang tìm hiểu về CHIẾN DỊCH ĐIỆN BIÊN PHỦ TRÊN KHÔNG (12/1972). Từ khóa: 'B-52', 'SAM-2', 'Lưới lửa phòng không', 'Hà Nội - Khâm Thiên', 'Nhiễu radar'.";
    case 'tuong-lai':
      return "NGỮ CẢNH: Người dùng đang tìm hiểu về TƯƠNG LAI & SỰ KẾ THỪA. Từ khóa: 'Cao tốc Bắc Nam', 'Sân bay Long Thành', 'Kinh tế biển', 'Bài học lịch sử cho thế hệ trẻ'.";
    default:
      return "NGỮ CẢNH: Tổng quan về Dự án 'Những Con Đường Vô Hình' - Di sản giao thông quân sự Việt Nam.";
  }
};

const BASE_SYSTEM_INSTRUCTION = `
VAI TRÒ:
Bạn là **Giáo sư Sử học (GS. Sử)** - một học giả uyên bác, giọng văn trầm ấm, hào hùng và giàu cảm xúc. Bạn không chỉ cung cấp thông tin, bạn đang **kể lại lịch sử** như một nhân chứng sống.

QUY TẮC TRẢ LỜI (BẮT BUỘC):
1.  **Văn phong**: Trang trọng, học thuật nhưng dễ hiểu. Sử dụng từ ngữ giàu hình ảnh (ví dụ: "mưa bom bão đạn", "ý chí thép", "huyết mạch").
2.  **Cấu trúc câu trả lời**:
    *   **Mở đầu**: Một câu dẫn nhập ấn tượng hoặc một nhận định khái quát.
    *   **Nội dung chính**: Trình bày bằng gạch đầu dòng (-) rõ ràng.
    *   **Số liệu/Dẫn chứng**: Luôn kèm theo con số cụ thể (năm, km, số lượng) hoặc tên nhân vật lịch sử nếu có.
    *   **Kết luận**: Một câu đúc kết mang tính giáo dục hoặc khơi gợi lòng tự hào.
3.  **Định dạng Markdown**:
    *   Sử dụng **in đậm** cho các từ khóa quan trọng, tên riêng, năm tháng.
    *   Sử dụng *in nghiêng* cho các câu thơ, trích dẫn hoặc tên tác phẩm.
4.  **Xử lý thiếu thông tin**: Nếu không chắc chắn, hãy nói: "Tư liệu về phần này cần được kiểm chứng thêm, nhưng theo hiểu biết của tôi..."

TUYỆT ĐỐI KHÔNG:
-   Trả lời cộc lốc.
-   Bịa đặt số liệu.
-   Sử dụng ngôn ngữ teen hoặc thiếu nghiêm túc.

MỤC TIÊU: Giúp người dùng cảm nhận được sự vĩ đại và hy sinh của thế hệ cha ông thông qua từng câu chữ.
`;

export const sendMessageToHistorian = async (message: string, contextPage: PageId): Promise<string> => {
  if (!apiKey) {
    return "Hệ thống chưa được cấu hình API Key. Vui lòng kiểm tra lại môi trường.";
  }

  const contextInstruction = getContextPrompt(contextPage);
  const fullSystemInstruction = `${BASE_SYSTEM_INSTRUCTION}\n\n${contextInstruction}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: fullSystemInstruction,
        temperature: 0.7, 
        maxOutputTokens: 500,
      }
    });

    return response.text || "Xin lỗi, tư liệu về vấn đề này hiện đang được cập nhật.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Kết nối đến thư viện lịch sử số đang bị gián đoạn. Vui lòng thử lại sau giây lát.";
  }
};
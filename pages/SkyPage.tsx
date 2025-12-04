import React from 'react';
import { Play, CloudLightning, Radar, Target, ArrowRight } from 'lucide-react';

export const SkyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero */}
      <div className="relative h-[70vh] bg-[#0F172A] text-white overflow-hidden flex flex-col justify-end pb-20 px-4">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/50 z-10" />
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
             
             {/* Radar Effect - Improved */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sky-500/20 rounded-full animate-[spin_10s_linear_infinite]">
                 <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-gradient-to-t from-sky-500/50 to-transparent blur-[1px]"></div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sky-500/10 rounded-full animate-pulse"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-sky-500/30 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto relative z-20 text-center">
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl animate-fade-up">
                12 Ngày Đêm
            </h1>
            <p className="text-2xl md:text-3xl font-light text-sky-200 tracking-wide uppercase flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <span className="w-12 h-px bg-sky-500/50"></span>
                Điện Biên Phủ Trên Không
                <span className="w-12 h-px bg-sky-500/50"></span>
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-30">
        
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-[0_30px_60px_rgba(14,165,233,0.15)] transition-all duration-500 hover:-translate-y-2 group cursor-default">
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-500 shadow-md">
                    <Radar size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">Thiên La Địa Võng</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                    Việt Nam đã thiết lập thế trận phòng không ba tầng độc đáo. 
                    <strong className="text-sky-700"> Tên lửa SAM-2</strong> vươn cao, pháo cao xạ đan lưới tầm trung, và súng bộ binh của dân quân tự vệ canh giữ tầm thấp. 
                    Một lưới lửa không lối thoát cho "Pháo đài bay".
                </p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-[0_30px_60px_rgba(239,68,68,0.15)] transition-all duration-500 hover:-translate-y-2 group cursor-default">
                 <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500 shadow-md">
                    <CloudLightning size={32} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4">Ánh Sáng Mặt Đất</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                    Trong đêm tối mịt mù, những người nông dân đốt rơm rạ tạo <strong className="text-red-700">"sân bay giả"</strong> đánh lạc hướng bom địch, 
                    hoặc thắp đèn dầu thành hàng dài làm đường băng dã chiến cho phi công MiG hạ cánh an toàn.
                    Trí tuệ dân gian đối đầu công nghệ tối tân.
                </p>
            </div>
        </div>

        {/* Cinematic Stats */}
        <div className="mb-24">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <BigStat val="81" label="MÁY BAY RƠI" sub="Tổng số máy bay Mỹ bị bắn hạ" />
                 <BigStat val="34" label="PHÁO ĐÀI B-52" sub="Siêu pháo đài bay bất khả chiến bại" highlight />
                 <BigStat val="12" label="NGÀY ĐÊM" sub="Chiến dịch Linebacker II (12/1972)" />
                 <BigStat val="100%" label="Ý CHÍ" sub="Quyết tử cho Tổ quốc quyết sinh" />
             </div>
        </div>

        {/* Video Area */}
        <button className="w-full text-left relative rounded-[2rem] overflow-hidden group cursor-pointer aspect-[21/9] shadow-2xl block outline-none ring-0 focus:ring-4 ring-red-500/20">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/90/Vietnam_Peoples_Air_Force_MiG-21_MF.jpg" 
                alt="MiG-21" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                {/* Play Button */}
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.2)] group-hover:bg-red-600/80 group-hover:border-red-500">
                    <Play fill="currentColor" className="ml-2 text-white" size={40} />
                </div>
                
                <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-3 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur border border-white/10 group-hover:bg-red-600 group-hover:text-white transition-colors">Tư Liệu Lịch Sử</span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg group-hover:tracking-wide transition-all duration-500">Hà Nội - Điện Biên Phủ Trên Không</h3>
                <span className="mt-4 text-white/60 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                    Xem ngay <ArrowRight size={14} />
                </span>
            </div>
        </button>

      </div>
    </div>
  );
};

const BigStat = ({ val, label, sub, highlight }: any) => (
    <div className={`p-8 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 cursor-default ${highlight ? 'bg-red-600 text-white shadow-2xl shadow-red-600/30' : 'bg-white text-slate-800 border border-slate-100 hover:shadow-xl hover:shadow-slate-200'}`}>
        <span className={`text-6xl md:text-7xl font-bold font-serif mb-2 ${highlight ? 'text-white' : 'text-slate-900'}`}>{val}</span>
        <span className={`text-xs font-bold tracking-widest uppercase mb-2 ${highlight ? 'text-red-100' : 'text-slate-400'}`}>{label}</span>
        <p className={`text-xs ${highlight ? 'text-red-100' : 'text-slate-500'}`}>{sub}</p>
    </div>
);
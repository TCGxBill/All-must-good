import React from 'react';
import { ArrowRight, Mountain, Cloud, Map, Compass, ChevronRight } from 'lucide-react';
import { PageId } from '../types';

interface HomePageProps {
  setPage: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <div className="fade-in bg-stone-50">
      {/* Cinematic Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/60 to-stone-900/90 z-10" />
             <img 
                src="https://images.unsplash.com/photo-1533230919799-2cdfa4c25602?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]" 
                alt="Background"
            />
        </div>
        
        {/* Content */}
        <div className="relative z-20 px-4 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-12">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fade-up_1s_ease-out_forwards]">
                        <div className="h-[2px] w-12 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                        <span className="text-amber-400 tracking-[0.3em] text-sm font-bold uppercase drop-shadow-md">Hành trình lịch sử</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-[0.9] tracking-tighter mb-8 opacity-0 animate-[fade-up_1s_ease-out_0.2s_forwards] drop-shadow-2xl">
                        Những Con Đường <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-500 italic pr-4 filter drop-shadow-lg">
                            Vô Hình
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl font-light text-stone-200 max-w-2xl leading-relaxed opacity-0 animate-[fade-up_1s_ease-out_0.4s_forwards] drop-shadow-md">
                        Khám phá mạng lưới huyết mạch bảo vệ Tổ quốc. <br/>
                        Từ lòng đất sâu thẳm đến bầu trời rực lửa.
                    </p>
                </div>

                <div className="md:mb-12 opacity-0 animate-[fade-up_1s_ease-out_0.6s_forwards]">
                    {/* Primary Hero CTA */}
                     <button 
                        onClick={() => setPage('duoi-dat')}
                        className="group relative flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 pl-8 pr-2 py-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] active:scale-95"
                    >
                        <div className="flex flex-col items-start">
                            <span className="text-white text-lg font-serif italic">Bắt đầu hành trình</span>
                            <span className="text-amber-400 text-[10px] uppercase tracking-widest font-bold">Start Exploring</span>
                        </div>
                        <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-amber-500 transition-colors relative overflow-hidden btn-shimmer">
                            <ArrowRight size={24} className="text-white relative z-10 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
      </header>

      {/* Modern Bento Grid Navigation */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-2">Tam Giác Phòng Thủ</h2>
                    <p className="text-stone-500 text-lg">Ba mặt trận - Một ý chí kiên cường</p>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-sm font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Select a Chapter
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                
                {/* Card 1: Underground */}
                <div 
                    onClick={() => setPage('duoi-dat')}
                    className="md:col-span-5 relative group overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-stone-900 active:scale-[0.98]"
                >
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cu_Chi_Tunnel.jpg/640px-Cu_Chi_Tunnel.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent" />
                    
                    <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-inner group-hover:bg-amber-600 group-hover:border-amber-500 transition-colors duration-300">
                        <Map className="text-amber-400 group-hover:text-white" size={20} />
                    </div>

                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                         <div className="bg-white/20 backdrop-blur rounded-full p-2">
                            <ArrowRight className="text-white" size={20} />
                         </div>
                    </div>

                    <div className="absolute bottom-10 left-8 right-8">
                        <span className="text-amber-500 font-mono text-xs tracking-widest mb-3 block border-l-2 border-amber-500 pl-3">01 — LÒNG ĐẤT</span>
                        <h3 className="text-4xl font-serif font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">Địa Đạo</h3>
                        <p className="text-stone-300 line-clamp-2 group-hover:text-white transition-colors text-sm leading-relaxed max-w-sm">
                            Thành phố ngầm vĩ đại, nơi sự sống nảy mầm trong bóng tối của chiến tranh.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-7 grid grid-rows-2 gap-6">
                    {/* Card 2: Ground */}
                    <div 
                        onClick={() => setPage('mat-dat')}
                        className="relative group overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-emerald-900 active:scale-[0.98]"
                    >
                         <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ho_Chi_Minh_Trail_map.jpg/800px-Ho_Chi_Minh_Trail_map.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
                         <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/40 to-transparent" />
                         
                         <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-inner group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-colors duration-300">
                            <Mountain className="text-emerald-400 group-hover:text-white" size={20} />
                        </div>

                         <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                             <div className="bg-white/20 backdrop-blur rounded-full p-2">
                                <ArrowRight className="text-white" size={20} />
                             </div>
                        </div>

                         <div className="absolute bottom-8 left-8 max-w-lg">
                            <span className="text-emerald-400 font-mono text-xs tracking-widest mb-2 block border-l-2 border-emerald-500 pl-3">02 — MẶT ĐẤT</span>
                            <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Đường Trường Sơn</h3>
                            <p className="text-emerald-100/80 group-hover:text-white transition-colors text-sm">
                                Huyết mạch giao thông huyền thoại nối liền Nam Bắc qua mưa bom bão đạn.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Sky */}
                    <div 
                        onClick={() => setPage('tren-khong')}
                        className="relative group overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-blue-900 active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/9/90/Vietnam_Peoples_Air_Force_MiG-21_MF.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform" />
                         <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/40 to-transparent" />
                         
                         <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-inner group-hover:bg-sky-600 group-hover:border-sky-500 transition-colors duration-300">
                            <Cloud className="text-sky-400 group-hover:text-white" size={20} />
                        </div>

                         <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                             <div className="bg-white/20 backdrop-blur rounded-full p-2">
                                <ArrowRight className="text-white" size={20} />
                             </div>
                        </div>

                         <div className="absolute bottom-8 left-8 max-w-lg">
                            <span className="text-sky-400 font-mono text-xs tracking-widest mb-2 block border-l-2 border-sky-500 pl-3">03 — BẦU TRỜI</span>
                            <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Điện Biên Phủ Trên Không</h3>
                            <p className="text-sky-100/80 group-hover:text-white transition-colors text-sm">
                                12 ngày đêm lịch sử, lưới lửa phòng không bảo vệ thủ đô.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-stone-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 relative z-10">
            <Compass className="mx-auto text-amber-500 mb-8 animate-spin-slow drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" size={40} />
            <blockquote className="text-3xl md:text-5xl font-serif font-medium text-white max-w-4xl mx-auto leading-tight">
                "Dân tộc Việt Nam đã biến những điều không thể thành có thể, biến sự hủy diệt thành sự hồi sinh."
            </blockquote>
            <p className="mt-8 text-stone-500 uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                <span className="w-8 h-px bg-stone-700"></span>
                Di Sản Việt Nam
                <span className="w-8 h-px bg-stone-700"></span>
            </p>
        </div>
      </section>
    </div>
  );
};
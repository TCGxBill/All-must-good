import React from 'react';
import { ComparisonSlider } from '../components/ComparisonSlider';
import { Music, Speaker, Play } from 'lucide-react';

export const GroundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-emerald-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-jungle-dark to-jungle text-white py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
            <span className="uppercase tracking-[0.2em] text-emerald-200 text-sm font-bold mb-4 block animate-fade-up">Đường Trường Sơn - Đường Hồ Chí Minh</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>Xẻ Dọc Trường Sơn<br/>Đi Cứu Nước</h1>
            <p className="text-xl font-light text-emerald-100 italic animate-fade-up" style={{ animationDelay: '0.2s' }}>"Mà lòng phơi phới dậy tương lai"</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quote Block */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
            <p className="text-xl md:text-2xl text-slate-700 font-serif leading-loose">
                Một hệ thống giao thông hào hùng dài hơn <span className="text-jungle font-bold">20.000km</span> xuyên qua rừng rậm, núi cao. 
                Nơi ghi dấu những "Tiểu đội xe không kính", những cô gái Thanh niên xung phong 
                dùng tuổi thanh xuân để mở đường.
            </p>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden mb-20 border border-emerald-100">
            <div className="p-8 md:p-12 text-center bg-stone-50 border-b border-emerald-50">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Quá Khứ & Hiện Tại</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Từ những lối mòn nhỏ hẹp dưới tán cây rừng già, nay đã trở thành đại lộ Hồ Chí Minh rộng lớn, đóng góp vào sự phát triển kinh tế của đất nước.
                </p>
            </div>
            <div className="p-6 bg-stone-50">
                <div className="max-w-5xl mx-auto">
                    <ComparisonSlider />
                </div>
            </div>
        </div>

        {/* Audio/Cultural Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ho_Chi_Minh_Trail_map.jpg/500px-Ho_Chi_Minh_Trail_map.jpg" alt="Map" className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-jungle/20 group-hover:bg-transparent transition-colors"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-800 shadow-lg">
                        Bản đồ hệ thống
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <h3 className="text-3xl font-serif font-bold text-jungle-dark mb-6">Vang Vọng Núi Rừng</h3>
                <p className="text-slate-700 mb-8 leading-relaxed">
                    Đường Trường Sơn không chỉ là con đường vận tải, mà còn là con đường của văn hóa, âm nhạc và thơ ca. Những bài hát như "Cô gái mở đường", "Trường Sơn Đông, Trường Sơn Tây" đã trở thành nguồn động viên tinh thần to lớn.
                </p>
                
                <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-emerald-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                            <div className="w-14 h-14 bg-rose-500 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg shadow-rose-500/30">
                                <Music size={24} />
                            </div>
                            <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-20"></div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-lg">Playlist Trường Sơn</h4>
                            <p className="text-xs text-slate-500 uppercase tracking-wide">Những bài hát đi cùng năm tháng</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                         <SongItem title="Cô Gái Mở Đường" artist="Cẩm Ly" />
                         <SongItem title="Trường Sơn Đông Trường Sơn Tây" artist="Thu Hiền - Trung Đức" />
                         <SongItem title="Bước Chân Trên Dãy Trường Sơn" artist="Tốp ca Quân khu 7" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const SongItem = ({ title, artist }: any) => (
    <button className="w-full flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 hover:shadow-md transition-all duration-300 cursor-pointer group border border-transparent hover:border-emerald-200 text-left active:scale-[0.99]">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                <Play size={12} fill="currentColor" />
            </div>
            <div>
                <span className="block text-sm font-bold text-slate-700 group-hover:text-emerald-800 transition-colors">{title}</span>
                <span className="text-xs text-slate-500">{artist}</span>
            </div>
        </div>
        <Speaker size={18} className="text-slate-300 group-hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" />
    </button>
);
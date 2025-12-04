import React from 'react';
import { Map, Zap, Home, Shield, Lightbulb } from 'lucide-react';

export const UndergroundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 pb-20">
      {/* Immersive Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cu_Chi_Tunnel.jpg/1280px-Cu_Chi_Tunnel.jpg" 
                className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
                alt="Tunnel Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/80 to-stone-950" />
            
            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
            <span className="inline-block py-1 px-3 border border-amber-800/50 rounded-full text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-stone-900/50">
                Lịch sử ngầm
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white tracking-tight">
                Địa Đạo <span className="text-amber-700">Huyền Thoại</span>
            </h1>
            <p className="text-xl font-light text-stone-400 max-w-2xl mx-auto leading-relaxed">
                Nơi sự sống sinh sôi trong bóng tối, nơi ý chí con người cứng hơn đất đá thép gang.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-32 relative z-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Stats Card (Floating Glass) */}
            <div className="md:col-span-4 bg-stone-900/60 backdrop-blur-xl p-8 rounded-[2rem] border border-stone-800 shadow-2xl sticky top-24">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center text-amber-500 border border-amber-900/50">
                        <Map size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-white">Cấu Trúc</h2>
                        <p className="text-stone-500 text-sm font-mono">Củ Chi & Vĩnh Mốc</p>
                    </div>
                </div>
                
                <div className="space-y-6">
                    <StatRow label="Tổng chiều dài" value="250+" unit="km" />
                    <div className="h-px bg-stone-800"></div>
                    <StatRow label="Độ sâu tối đa" value="12" unit="mét" />
                    <div className="h-px bg-stone-800"></div>
                    <StatRow label="Số tầng địa đạo" value="03" unit="tầng" />
                    <div className="h-px bg-stone-800"></div>
                    <StatRow label="Thời gian đào" value="20+" unit="năm" />
                </div>
            </div>

            {/* Content Text */}
            <div className="md:col-span-8 space-y-20 pt-10 md:pt-0">
                <section>
                    <h3 className="text-4xl font-serif font-bold mb-8 text-white flex items-center gap-4">
                        <span className="text-stone-700 text-6xl opacity-20 -ml-4 absolute -z-10">01</span>
                        Thành Phố Ngầm
                    </h3>
                    <p className="text-lg md:text-xl text-stone-400 leading-relaxed mb-8">
                        Không chỉ là nơi trú ẩn, địa đạo là một <strong className="text-amber-500 font-normal">hệ thống xã hội thu nhỏ</strong> hoàn chỉnh. 
                        Dưới lớp đất dày là bệnh xá, trường học, kho vũ khí, nhà bếp Hoàng Cầm không khói, 
                        và thậm chí cả rạp chiếu phim để phục vụ tinh thần chiến sĩ.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <FeatureBox icon={<Home size={20} />} title="Đời sống" desc="Sinh hoạt, học tập diễn ra bình thường dưới lòng đất." />
                        <FeatureBox icon={<Shield size={20} />} title="Phòng thủ" desc="Hệ thống bẫy chông, lỗ châu mai ngụy trang tinh vi." />
                        <FeatureBox icon={<Zap size={20} />} title="Kết cấu" desc="Chịu được sức công phá của bom hạng nặng và xe tăng." />
                        <FeatureBox icon={<Lightbulb size={20} />} title="Sáng tạo" desc="Bếp Hoàng Cầm tản khói, giấu vị trí nấu ăn." />
                    </div>
                </section>

                <section>
                    <h3 className="text-4xl font-serif font-bold mb-8 text-white flex items-center gap-4">
                        <span className="text-stone-700 text-6xl opacity-20 -ml-4 absolute -z-10">02</span>
                         Cấu Trúc Tầng
                    </h3>
                    
                    {/* Interactive-looking Diagram */}
                    <div className="relative border-l-2 border-stone-800 pl-8 space-y-12">
                        <LayerItem 
                            depth="3-4m" 
                            title="Tầng 1: Chiến Đấu" 
                            desc="Nơi bố trí các ổ bắn tỉa, hầm chông và lỗ thông hơi. Chịu được đạn pháo và sức nặng xe tăng." 
                        />
                        <LayerItem 
                            depth="5-8m" 
                            title="Tầng 2: Sinh Hoạt" 
                            desc="Nơi nghỉ ngơi, bệnh xá, kho lương thực và nhà bếp. Được thiết kế nắp hầm bí mật để ngăn hơi độc." 
                        />
                         <LayerItem 
                            depth="10m+" 
                            title="Tầng 3: Trú Ẩn" 
                            desc="Hầm sâu nhất, an toàn tuyệt đối trước các loại bom tấn. Có đường thoát hiểm bí mật ra sông Sài Gòn." 
                            isLast
                        />
                    </div>
                </section>
            </div>
        </div>
      </div>
    </div>
  );
};

const StatRow = ({ label, value, unit }: any) => (
    <div className="flex justify-between items-end">
        <span className="text-stone-500 uppercase text-xs tracking-wider font-bold">{label}</span>
        <div className="text-right">
            <span className="text-3xl font-serif font-bold text-white">{value}</span>
            <span className="text-stone-600 ml-1">{unit}</span>
        </div>
    </div>
);

const FeatureBox = ({ icon, title, desc }: any) => (
    <div className="bg-stone-900 p-5 rounded-xl border border-stone-800 hover:border-amber-900/50 transition-colors group">
        <div className="text-amber-600 mb-3 group-hover:scale-110 transition-transform origin-left">{icon}</div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

const LayerItem = ({ depth, title, desc, isLast }: any) => (
    <div className="relative group">
        <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-stone-950 ${isLast ? 'bg-amber-600' : 'bg-stone-700 group-hover:bg-amber-600'} transition-colors`}></div>
        <span className="absolute -left-[120px] top-0 font-mono text-stone-600 text-sm">{depth}</span>
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{title}</h4>
        <p className="text-stone-400 leading-relaxed max-w-xl">{desc}</p>
    </div>
);

import { Play, UserRoundPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-zinc-900">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between p-6">
        <div className="text-2xl font-light text-white">devcore</div>
        <div className="flex gap-6">
          <a href="#" className="text-white/80 hover:text-white">ПРОДУКТ</a>
          <a href="#" className="text-white/80 hover:text-white">РЕШЕНИЕ</a>
          <a href="#" className="text-white/80 hover:text-white">РЕСУРСЫ</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="default" className="bg-primary text-white hover:bg-primary/90">
            <UserRoundPlus className="mr-2 h-4 w-4" />
            Регистрация
          </Button>
          <Button variant="outline" className="bg-white text-black hover:bg-white/90 border-white">
            Проекты
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20">
        <div className="relative grid grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-bold leading-tight text-white">
              Ваш путь к эффективности начинается здесь
            </h1>
            <p className="text-xl text-white/80">
              Используйте эффективные диаграммы для оптимизации вашего бизнеса
            </p>
            <div>
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Сгенерировать
              </Button>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative aspect-video rounded-lg bg-gradient-to-br from-rose-500/20 to-orange-500/20 backdrop-blur">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                className={cn(
                  "h-16 w-16 rounded-full bg-white/10 backdrop-blur",
                  "hover:bg-white/20 transition-all duration-300"
                )}
              >
                <Play className="h-8 w-8 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Gradient Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-orange-500/20 to-transparent blur-3xl" />
      </main>
    </div>
  );
};

export default Index;


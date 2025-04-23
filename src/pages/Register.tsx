
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";

const Register = () => {
  // Без логики — только UI, как на скрине; при клике редирект выполняется через window.location
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:3000/";
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at left 30% top 55%, #F97316 0%, #1A1F2C 100%)",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-black/70 backdrop-blur-lg rounded-2xl shadow-2xl px-10 py-10 flex flex-col gap-7"
        style={{
          boxShadow: "0 4px 32px 0 rgba(0,0,0,0.35)",
        }}
      >
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Регистрация
        </h1>

        <div>
          <Label htmlFor="email" className="text-white block mb-2 text-lg">
            Почта
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="example@mail.ru"
              className="pl-11 bg-white/10 border-none text-white placeholder:text-white/40 text-base h-12 rounded-xl"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password" className="text-white block mb-2 text-lg">
            Пароль
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <Input
              id="password"
              type="password"
              required
              placeholder="********"
              autoComplete="new-password"
              className="pl-11 bg-white/10 border-none text-white placeholder:text-white/40 text-base h-12 rounded-xl"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password-confirm" className="text-white block mb-2 text-lg">
            Пароль (повторно)
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <Input
              id="password-confirm"
              type="password"
              required
              placeholder="********"
              autoComplete="new-password"
              className="pl-11 bg-white/10 border-none text-white placeholder:text-white/40 text-base h-12 rounded-xl"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="mt-2 h-12 w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold transition-all duration-200 shadow-none hover:brightness-90"
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default Register;

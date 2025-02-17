"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";
import Footer from "../footer/page";



export default function PrintPage() {
  const [formData, setFormData] = useState({
    url: "seusite.com.br",
    message: "Visite-nos para as melhores ofertas da cidade! Ganhe 10% de desconto em sua próxima compra ao mostrar este recibo",
    name: "Minha Loja",
    phone: "(00) 00000-0000",
    cupom: "VOLTA2025",
  });

  // Função para aplicar a máscara de telefone
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    const formattedPhone = value.replace(
      /^(\d{2})(\d{5})(\d{0,4})$/,
      (_, ddd, firstPart, secondPart) =>
        `(${ddd}) ${firstPart}${secondPart ? `-${secondPart}` : ""}`
    );
    setFormData((prev) => ({ ...prev, phone: formattedPhone }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className=" min-h-screen w-full bg-gradient-to-t from-[#e2f3fe] via-transparent to-[#e2f3fe]/40 content-end">
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-4xl mx-auto drop-shadow-2xl">
      {/* Form Section */}
      <Card className="flex-1 p-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url" className="font-semibold">
              Digite seu site
            </Label>
            <Input
              id="url"
              value={formData.url}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, url: e.target.value }))
              }
              placeholder="Seu site"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold">
              Estabelecimento
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Nome do seu estabelecimento"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-semibold">
              Telefone ou WhatsApp
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-semibold">
              Mensagem publicitária
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Visite-nos para as melhores ofertas da cidade! Ganhe 10% de desconto em sua próxima compra ao mostrar este recibo"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cupom" className="font-semibold">
              Cupom
            </Label>
            <Input
              id="cupom"
              value={formData.cupom}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, cupom: e.target.value }))
              }
              placeholder="Digite seu cupom se houver"
            />
          </div>

          <Button onClick={handlePrint} className="w-full bg-sky-500 hover:bg-sky-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="white"
              fill="none"
            >
              <path
                d="M7.35396 18C5.23084 18 4.16928 18 3.41349 17.5468C2.91953 17.2506 2.52158 16.8271 2.26475 16.3242C1.87179 15.5547 1.97742 14.5373 2.18868 12.5025C2.36503 10.8039 2.45321 9.95455 2.88684 9.33081C3.17153 8.92129 3.55659 8.58564 4.00797 8.35353C4.69548 8 5.58164 8 7.35396 8H16.646C18.4184 8 19.3045 8 19.992 8.35353C20.4434 8.58564 20.8285 8.92129 21.1132 9.33081C21.5468 9.95455 21.635 10.8039 21.8113 12.5025C22.0226 14.5373 22.1282 15.5547 21.7352 16.3242C21.4784 16.8271 21.0805 17.2506 20.5865 17.5468C19.8307 18 18.7692 18 16.646 18"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M17 8V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M13.9887 16L10.0113 16C9.32602 16 8.98337 16 8.69183 16.1089C8.30311 16.254 7.97026 16.536 7.7462 16.9099C7.57815 17.1904 7.49505 17.5511 7.32884 18.2724C7.06913 19.3995 6.93928 19.963 7.02759 20.4149C7.14535 21.0174 7.51237 21.5274 8.02252 21.7974C8.40513 22 8.94052 22 10.0113 22L13.9887 22C15.0595 22 15.5949 22 15.9775 21.7974C16.4876 21.5274 16.8547 21.0174 16.9724 20.4149C17.0607 19.963 16.9309 19.3995 16.6712 18.2724C16.505 17.5511 16.4218 17.1904 16.2538 16.9099C16.0297 16.536 15.6969 16.254 15.3082 16.1089C15.0166 16 14.674 16 13.9887 16Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M18 12H18.009"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Gerar Publicidade
          </Button>
        </div>
      </Card>

      {/* Preview Section */}
      <Card className="flex-1 p-4">
        <div className="text-center mb-4">Pré Visualização</div>
        <div className="receipt-preview w-[302px] mx-auto p-4 border rounded-lg">
          <div className="flex justify-center mb-6">
            <QRCodeSVG
              value={formData.url}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>

          <div className="text-center border-t pt-4 text-xl">
            <div className="font-bold mb-2 uppercase">{formData.cupom}</div>
          </div>

          <div className="text-center mb-6 whitespace-normal break-words">
            {formData.message}
          </div>

          <div className="text-center border-t pt-4">
            <div className="font-bold mb-2">{formData.name}</div>
            <div>{formData.phone}</div>
          </div>
        </div>
      </Card>      

      {/* Print-only styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .receipt-preview,
          .receipt-preview * {
            visibility: visible;
          }
          .receipt-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 80mm !important;
            border: none !important;
          }
        }
      `}</style>

    </div>
    <Footer/>
    </div>
    
    
  );
}

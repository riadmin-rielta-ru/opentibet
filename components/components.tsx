"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useRef } from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import {
  LINK_CONTACTS,
  LINK_WELCOME_SCREEN,
  LINK_OFFERS,
  LINK_TIBET_PREPARATION,
  LINK_APPLY_FORM,
  LINK_TELEGRAM,
  LINK_WHATSAPP,
  LINK_ABOUT_US,
  LINK_PREPARING_FOR_TRIP,
  LINK_GURUTIBET,
  LINK_PHOTO_GALLERY,
} from "@/utils/constants";
import Link from "next/link";
import { TimetableFactoid } from "./ToursTimetable";
import { imagesSrc } from "./TibetInfo";
import { Language, LanguageProvider, useLanguage, useSetLanguage, useTranslateFn } from "@/lib/language";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

import { usePathname, useRouter } from 'next/navigation'

import cn from 'classnames'

import { AlignJustifyIcon } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export const BackgroundSlider = () => {
  const images = [
    // 'https://storage.googleapis.com/opentibet/chiu.jpg',
    // 'https://storage.googleapis.com/opentibet/raduga.jpg',
    // 'https://storage.googleapis.com/opentibet/topor.jpg',
    "https://storage.googleapis.com/opentibet/background-6.jpg", // padmasambhava

    "https://storage.googleapis.com/opentibet/background-2.jpg", // drak yerpa ok
    // 'https://storage.googleapis.com/opentibet/background-3.jpg',
    "https://storage.googleapis.com/opentibet/background-4.jpg",
    "https://storage.googleapis.com/opentibet/background-5.jpg", // monah ok
    // 'https://storage.googleapis.com/opentibet/background-8.jpg',
    "https://storage.googleapis.com/opentibet/background-1.jpg", // devochka ok

    // одну с маносраваром
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const currentImageUrl = images[currentImageIndex];
  // style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}

  // for cache
  const renderImagesList = () => {
    return images.map((url, index) => {
      return <img src={url} key={index} style={{ display: "none" }} />;
    });
  };
  return (
    <>
      <div
        className="w-full h-full absolute"
        style={{
          backgroundImage: `url(${currentImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      />
      {renderImagesList()}
    </>
  );
};

export const Arrow = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center items-center h-16 w-full">
      <div
        className="text-gray-300 hover:text-gray-600 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export const PhotoGallery = () => {
  // const photo1src = "https://storage.googleapis.com/opentibet/chiu.jpg";
  // const photo2src = "https://storage.googleapis.com/opentibet/raduga.jpg";
  // const photo3src = "https://storage.googleapis.com/opentibet/topor.jpg";
  // const photo4src = "https://storage.googleapis.com/opentibet/background-7.jpg"; // replace with actual photos
  // const photo5src = "https://storage.googleapis.com/opentibet/background-8.jpg";
  const photo6src = "https://storage.googleapis.com/opentibet/1182705035767992360.png";

  const imgClassName = "cursor-pointer w-48 bg-cover"

  return (
    <PhotoProvider>
      <div className="flex flex-wrap gap-1 justify-center">
        <PhotoView src={imagesSrc.namtso}>
          <img
            src={imagesSrc.namtso}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.drepung}>
          <img
            src={imagesSrc.drepung}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.namtsoNorth1}>
          <img
            src={imagesSrc.namtsoNorth1}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.girjong}>
          <img
            src={imagesSrc.girjong}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.ganden}>
          <img
            src={imagesSrc.ganden}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={photo6src}>
          <img
            src={photo6src}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.jokang}>
          <img
            src={imagesSrc.jokang}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.sakya}>
          <img
            src={imagesSrc.sakya}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.everestBasecamp}>
          <img
            src={imagesSrc.everestBasecamp}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.nandi}>
          <img
            src={imagesSrc.nandi}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.nartang}>
          <img
            src={imagesSrc.nartang}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.drakYerpa}>
          <img
            src={imagesSrc.drakYerpa}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.pelkutso}>
          <img
            src={imagesSrc.pelkutso}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.tsurphu}>
          <img
            src={imagesSrc.tsurphu}
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src={imagesSrc.sashipangma}>
          <img
            src={imagesSrc.sashipangma}
            alt=""
            className={imgClassName}
          />
        </PhotoView>

        <PhotoView src="https://img.opentibet.ru/gallery/gallery-tibet-1.jpg">
          <img
            src="https://img.opentibet.ru/gallery/gallery-tibet-1.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>
        <PhotoView src="https://img.opentibet.ru/gallery/gallery-tibet-2.jpg">
          <img
            src="https://img.opentibet.ru/gallery/gallery-tibet-2.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>

        <PhotoView src="https://img.opentibet.ru/gallery/gallery-tibet-3.jpg">
          <img
            src="https://img.opentibet.ru/gallery/gallery-tibet-3.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>

        <PhotoView src="https://img.opentibet.ru/logo/tibet-group-4.jpg">
          <img
            src="https://img.opentibet.ru/logo/tibet-group-4.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>

        <PhotoView src="https://img.opentibet.ru/gallery/gallery-tibet-4.jpg">
          <img
            src="https://img.opentibet.ru/gallery/gallery-tibet-4.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>


        <PhotoView src="https://img.opentibet.ru/gallery/gallery-tibet-5.jpg">
          <img
            src="https://img.opentibet.ru/gallery/gallery-tibet-5.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>

        <PhotoView src="https://img.opentibet.ru/gallery/gallery-tibet-6.jpg">
          <img
            src="https://img.opentibet.ru/gallery/gallery-tibet-6.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>

        <PhotoView src="https://img.opentibet.ru/gallery/gallery-tibet-7.jpg">
          <img
            src="https://img.opentibet.ru/gallery/gallery-tibet-7.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>

        <PhotoView src="https://img.opentibet.ru/gallery/gallery-tibet-8.jpg">
          <img
            src="https://img.opentibet.ru/gallery/gallery-tibet-8.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>

        <PhotoView src="https://img.opentibet.ru/logo/tibet-group-3.jpg">
          <img
            src="https://img.opentibet.ru/logo/tibet-group-3.jpg"
            alt=""
            className={imgClassName}
          />
        </PhotoView>

      </div>
    </PhotoProvider>
  );
};

const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-base font-medium text-left text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="ml-6">
          {isOpen ? <IconArrowClose /> : <IconArrowDown />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-6 pt-0 text-gray-700 leading-7">{children}</div>
      )}
    </div>
  );
};

export const IconArrowDown = () => {
  return (
    <svg
      className="w-4 h-4 opacity-70"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
      />
    </svg>
  );
};

export const IconArrowClose = () => {
  return (
    <svg
      className="w-4 h-4 opacity-70"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
};

export const FAQ: React.FC = () => {
  const translate = useTranslateFn()
  return (
    <>
      <Accordion
        title={translate({
          ru: "Где лучше менять валюту и что лучше везти в Тибет?",
          en: "Where is the best place to change currency and what is the best thing to bring to Tibet?",
        }) as string}
      >
        {translate({
          ru: "Лучше всего везти с собой юани.",
          en: "It is best to take yuan with you.",
        })}
        <br />
        {translate({
          ru: "Если стоит выбор: доллары или евро, то лучше доллары.",
          en: "If you have a choice: dollars or euros, then dollars are better.",
        })}
        <br />
        {translate({
          ru: "Валюту можно менять в банке, это долго или на черном рынке, если гид поможет",
          en: "Currency can be changed at a bank, it takes a long time or on the black market, if the guide helps",
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Можно ли купить в Китае сим карту?",
          en: "Is it possible to buy a SIM card in China?",
        }) as string}
      >
        {translate({
          ru: "Покупка сим карты это очень долгая процедура",
          en: "Buying a SIM card is a very long procedure.",
        })}
        <br />
        {translate({
          ru: "Иностранцам продает сим карты China Mobile. И без гида это сложно сделать.",
          en: "China Mobile sells SIM cards to foreigners. And it’s difficult to do this without a guide.",
        })}
        <br />
        {translate({
          ru: "Если нужна гарантированно связь, то лучше приобрести e-sim. ",
          en: "If you need a guaranteed connection, it’s better to purchase an e-sim. ",
        })}
        <a className="text-blue-500" href="https://t.me/Mobile" target="_blank">https://t.me/Mobile</a>
      </Accordion>
      <Accordion
        title={
          translate({
            ru: "Работает ли в Тибете Гугл и Воцап?",
            en: "Do Google and Whatsapp work?"
          }) as string
        }
      >
        {translate({
          ru: <>В Китае для нормальной связи с Россией нужен VPN.
            <br />
            Оптимальным является Wire Guard</>,
          en: <>
            In China, for normal communication with Russia you need a VPN.
            Wire Guard is optimal</>
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Есть ли проблема с питанием ? С питанием для вегетарианцев?",
          en: "Is there a problem with food? With meals for vegetarians?"
        }) as string}
      >
        {translate({
          ru: <>Сейчас в Тибете нет никаких проблем с едой.<br />
            Большие супермаркеты есть в каждом городе, включая Дарчен. Фрукты (Яблоки, мандарины, манго и тд) и овощи (помидоры, огурцы, цветная капуста и тд) продается по всему маршруту. Китайские рестораны представлены везде.</>,
          en: <>Now in Tibet there are no problems with food.
            There are large supermarkets in every city, including Darchen. Fruits (Apples, tangerines, mangoes, etc.) and vegetables (tomatoes, cucumbers, cauliflower, etc.) are sold along the entire route. Chinese restaurants are everywhere.</>
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Как организовано питание на Кайлас коре?",
          en: "How is food organized on Kailash kora?",
        }) as string}
      >
        {translate({
          ru: <>В обязанность гида входит организация завтрака в гестхаусе.<br />
            Завтрак достаточно скромный. Хлеб, яйцо чай. Но по всему маршруту Коры очень много ресторанов/кафе где можно заказать полноценный обед. Китайская и Тибетская кухня.</>,
          en: <>
            It is the responsibility of the guide to organize breakfast in the guesthouse.<br />
            Breakfast is quite modest. Bread, egg tea. But along the entire Cora route there are a lot of restaurants/cafes where you can order a full lunch. Chinese and Tibetan cuisine</>
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Дорогая ли еда в Тибете?",
          en: "Is food expensive in Tibet?",
        }) as string}
      >
        {translate({
          ru: "Можно рассчитывать примерно на 200 юаней в день. (хороший обед и ужин)",
          en: "You can count on about 200 yuan per day. (good lunch and dinner)",
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Где можно купить сувениры?",
          en: "Where can you buy souvenirs?"
        }) as string}
      >
        {translate({
          ru: `Barkor supermarket лучшее место для этого. Или район Barkor, но цены там дороже`,
          en: `Barkor supermarket is the best place for this. Or the Barkor area, but prices are more expensive there`
        })}
      </Accordion>

      <Accordion
        title={translate({
          ru: "Какие условия проживания на Кайлас коре?",
          en: "What are the living conditions at Kailash Kor?"
        }) as string}
      >
        {translate({
          ru: "Проживание в гестхаусе скромное. В комнате находится 3-5 кроватей. Электричество доступно обычно с 20:00 до 00:00. Туалет находится на улице.",
          en: `Guesthouse accommodation is modest. There are 3-5 beds in the room. Electricity is usually available from 20:00 to 00:00. The toilet is located outside.`
        })}
      </Accordion>
      <Accordion
        title={
          translate({
            ru: "Можно ли купить в Лхассе снаряжение для Коры?",
            en: "Is it possible to buy equipment for Kora in Lhassa?",
          }) as string
        }
      >
        {translate({
          ru: `В Лхассе огромное количество таких магазинов. Представлены профессиональные бренды:
          North Face, Vaude, Kailas . Under Armor и тд`,
          en: `There are a huge number of such stores in Lhassa. Professional brands represented: North Face, Vaude, Kailas. Under Armor, etc.`
        })}
      </Accordion>
      <Accordion
        title={translate({
          ru: "Можно ли привезти в Китай дрон для съемки видео?",
          en: "Is it possible to bring a drone to China to shoot video?"
        }) as string}
      >
        {translate({
          ru: "Иностранцам это запрещено, хотя китайцы активно пользуются.",
          en: "Foreigners are prohibited from doing this, although the Chinese actively use it."
        })}

      </Accordion>
      <Accordion
        title={translate({
          ru: "Можно ли брать с собой в Тибет книги?",
          en: `Can I bring a book with me to Tibet?`
        }) as string}
      >
        {translate({
          ru: `Можно, но они не должны в себе содержать историю Тибета и изображение Далай Ламы`,
          en: `It is possible, but they should not contain the history of Tibet and the image of the Dalai Lama`
        })}

      </Accordion>
      <Accordion
        title={
          translate({
            ru: `Когда начинается «горная болезнь» по прилету в Тибет?`,
            en: `When does “mountain sickness” begin upon arrival in Tibet?`
          }) as string
        }
      >
        {translate({
          ru: `Наиболее острая форма на второй день. По прилету необходимо пить очень много воды с витамином С. И гиды рекомендуют в первый вечер не мочить голову, при приеме душа.`,
          en: `The most acute form is on the second day. Upon arrival, you need to drink a lot of water with vitamin C. And the guides recommend not getting your hair wet on the first evening when taking a shower.`
        })}
      </Accordion>
    </>
  );
};

export const AbstractButton: React.FC<{
  label: string;
  accentColor?: string;
  hoverColor?: string;
  textColor?: string;
  anchor?: string;
}> = ({
  label,
  accentColor = "blue-500",
  hoverColor = "blue-800",
  textColor = "white",
  anchor = LINK_OFFERS,
}) => {
    return (
      <button
        className={`bg-${accentColor} hover:bg-${hoverColor} text-${textColor} font-bold py-3 px-5 rounded-lg flex items-center md:py-3 md:px-6 md:text-lg`}
        onClick={() => {
          if (anchor) {
            const timetableElementRef = document.getElementById(anchor);
            if (timetableElementRef) {
              timetableElementRef.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        }}
      >
        {label}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="m1 13 5.7-5.326a 0 0 0 0 0 0-1.348L1 1"
          />
        </svg>
      </button>
    );
  };

export const ActionButton = () => {
  const translate = useTranslateFn()

  return <AbstractButton label={
    translate({
      ru: "Получить консультацию",
      en: "Get a consultation"
    }) as string
  } anchor={LINK_APPLY_FORM} />;
};

export const TimetableDay: React.FC<{
  title: string;
  accentColor: string;
  children: React.ReactNode;
}> = ({ children, accentColor = "blue-500", title }) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center p-4 pl-2">
          <div className={`w-3 h-3 rounded-full bg-${accentColor}`} />
        </div>
        <div className="w-0.5 bg-gray-300 h-full" />
      </div>
      <div className="pr-10">
        <div className="font-bold text-xl text-gray-800 pt-2 pb-4">{title}</div>
        <div className="text-sm md:text-base md:leading-7">{children}</div>
      </div>
    </div>
  );
};

export const TimetablePhoto: React.FC<{
  src: string;
  title?: string;
  maxHeight?: number
}> = ({ src, title, maxHeight }) => {
  return (
    <div className="py-5 flex justify-center">
      <div className="max-w-lg">
        <img
          src={src}
          className="rounded-lg"
          style={maxHeight ? { maxHeight } : {}}
        />
        <div className="text-center p-2 text-sm text-gray-500">
          {title}
        </div>
      </div>
    </div>
  );
};

export const TimetablePhotoDouble: React.FC<{
  src1: string;
  src2: string;
  maxHeight?: number
}> = ({ src1, src2, maxHeight }) => {
  return (
    <div className="py-5 md:py-5 flex justify-center">
      <div className="flex max-w-3xl gap-1">
        <img
          src={src1}
          className="rounded-lg w-[50%]"
          style={maxHeight ? { maxHeight } : {}}
        />
        <img
          src={src2}
          className="rounded-lg w-[50%]"
          style={maxHeight ? { maxHeight } : {}}
        />
      </div>
    </div>
  );
};

const getNoun = (n: number, one: string, two: string, five: string) => {
  let abs = Math.abs(n);
  abs %= 100;
  if (abs >= 5 && abs <= 20) {
    return five;
  }
  abs %= 10;
  if (abs === 1) {
    return one;
  }
  if (abs >= 2 && abs <= 4) {
    return two;
  }
  return five;
};

export const TourButton: React.FC<{
  title: string;
  subtitle: string;
  days: number;
  price: number | string;
  bgColor?: string;
  fgColor?: string;
  accentColor?: string;
  withIcon?: boolean
  withBorder?: boolean;
}> = ({
  title,
  subtitle,
  days,
  price,
  bgColor = "blue-500",
  fgColor = "white",
  accentColor = "yellow-500",
  withIcon = false,
  withBorder
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const daysLabel = getNoun(days, "день", "дня", "дней");

    return (
      <div className={`my-0 relative bg-gray-100`}>
        <div className="hidden bg-yellow-500" />
        <div
          className={`h-[72px] sticky top-[60px] md:top-[64px]
          ${withBorder ? `border-b-[1px] border-b-${fgColor}/30` : ''}
         text-${fgColor} bg-${bgColor} hover:brightness-90
         `}
        >
          <div
            className="py-3 px-4 flex cursor-pointer justify-between"
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            <div className="flex items-center">
              <div className="mr-4 w-[11ch]">
                <div className="font-semibold text-2xl leading-5">{title}</div>
                <div className={`text-${accentColor} text-xs`}>{subtitle}</div>
              </div>
              <div className={`flex space-x-4 text-${fgColor}/80`}>
                <TimetableFactoid fact={daysLabel} value={String(days)} />
                <TimetableFactoid fact="цена, $" value={`${price}`} />
              </div>
            </div>
            <div className="h-12" />
            {withIcon && (
              <div className={`w-12 h-12 text-${fgColor} flex items-center justify-center`}>
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
              </div>
            )}
          </div>
        </div>
        {/* {isOpened && (
          <>
            <div className="px-4">
              <TimetableList accentColor={bgColor} />
              <div className="py-4" />
            </div>
            <div
              className={`px-4 bg-${bgColor} text-${fgColor} border-b-[1px] border-b-${fgColor}/30`}
            >
              <ApplyForm />
            </div>
          </>
        )} */}
      </div>
    );
  };

export const ButtonWithContent: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className={`mx-1 my-0 bg-gray-100`}>
      <div
        className="h-[72px] sticky top-[60px] md:top-[64px] bg-blue-500 hover:bg-blue-800 text-white
        border-b-[1px] border-b-white/20"
      >
        <div
          className="py-3 px-4 cursor-pointer flex items-center justify-between"
          onClick={() => {
            setIsOpened(!isOpened);
            // when user closes button scroll to "Подготовка к поездке" block
            if (isOpened) {
              const el = document.getElementById(LINK_TIBET_PREPARATION);
              if (el) {
                el.scrollIntoView({ behavior: 'instant', block: "start" });
              }
            }
          }}
        >
          <div>
            <div className="font-semibold text-md md:text-2xl leading-5">{title}</div>
          </div>
          <div className="p-4">
            {isOpened ? <IconArrowClose /> : <IconArrowDown />}
          </div>
        </div>
      </div>
      {isOpened && <>{children}</>}
    </div>
  );
};

export const ApplyForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const translate = useTranslateFn()

  return (
    <div id={LINK_APPLY_FORM}>
      <div className="flex items-center flex-wrap">
        <div className="w-full md:max-w-[50%] px-2 md:px-0">
          <Header
            title={translate({
              ru: "Заявка на участие",
              en: "Application for participation"
            }) as string}
            subtitle={translate({
              ru: "Отправьте нам заявку на почту office@gurutibet.com, и мы свяжемся с вами в ближайшее время",
              en: "Send us a request by email office@gurutibet.com and we will contact you shortly",
            }) as string}
          />
        </div>
        <div className="w-full md:max-w-[50%] p-4">
          По любым вопросам пишите нам на почту: <a href="mailto:office@gurutibet.com">office@gurutibet.com</a>

            </div>
            <div className="flex justify-end py-4">
             
            </div>
          
        </div>
    </div>
  );
};

export const Header: React.FC<{
  title: string;
  subtitle: string;
  id?: string;
}> = ({ title, subtitle, id = undefined }) => {
  return (
    <div id={id}>
      <div className="text-black-500 font-semibold text-2xl md:text-3xl pt-2">{title}</div>
      <div className="py-1 text-black-500 font-bold">{subtitle}</div>
    </div>
  );
};

export const NAVBAR_HEIGHT = 44;
export const Navbar = () => {
  const translate = useTranslateFn()
  const language = useLanguage()
  const setLanguage = useSetLanguage()

  const pathname = usePathname();
  // Function to check if the link is active
  const isActive = (activePathname: string): boolean => activePathname === pathname;

  const linkClassName = "block py-2 px-3 rounded text-xs md:text-base md:border-0 md:hover:text-gray-400 md:p-0"
  const linkActiveClassName = "text-gray-400"

  return (
    <nav className="bg-black/60 text-white backdrop-blur-md w-[100vw] fixed z-50">
      <div className="flex justify-center">
        <div className="max-w-7xl flex items-center justify-between mx-auto p-2 pb-3 w-full">
          <Link className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer " href={"/"}>
            <Image
              src="/opentibet-logo-hb.svg"
              width={190}
              height={NAVBAR_HEIGHT}
              alt="OpenTibet Logo"
              className="h-8 w-auto mr-3 md:h-11 md:my-2"
              onClick={(event) => {
                // if on main page scroll to top,
                // on other pages navigate to main page
                if (window.location.pathname === "/") {
                  event.preventDefault();
                  const elRef = document.getElementById(LINK_WELCOME_SCREEN);
                  if (elRef) {
                    elRef.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                } else {
                  // do nothing bc default behavior is fine
                }
              }}
            />
          </Link>

          <div className="block md:hidden">
            <NavbarHamburger />
          </div>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-colp-4 md:p-0 mt-4 mr-4 border items-center border-gray-100 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link href={LINK_ABOUT_US}
                  className={cn(linkClassName, {
                    [linkActiveClassName]: isActive(LINK_ABOUT_US)
                  })}>
                  {translate({
                    ru: 'О нас',
                    en: 'About Us'
                  })}
                </Link>
              </li>
              <li>
                <Link
                  href={`/#${LINK_OFFERS}`}
                  // onClick={(event) => {
                  //   smoothScroll(event, LINK_OFFERS);
                  // }}
                  className={cn(linkClassName, {
                    [linkActiveClassName]: isActive(`/#${LINK_OFFERS}`)
                  })}
                >
                  {translate({
                    ru: 'Программы',
                    en: 'Tours'
                  })}
                </Link>
              </li>
              <li>
                <Link
                  href={LINK_PREPARING_FOR_TRIP}
                  className={cn(linkClassName, {
                    [linkActiveClassName]: isActive(LINK_PREPARING_FOR_TRIP)
                  })}
                >
                  {translate({
                    ru: 'Подготовка к поездке',
                    en: 'Preparing for the trip'
                  })}
                </Link>
              </li>
              <li>
                <Link
                  href={LINK_GURUTIBET}
                  className={cn(linkClassName, {
                    [linkActiveClassName]: isActive(LINK_GURUTIBET)
                  })}
                >
                  {translate({
                    ru: 'GuruTibet',
                    en: 'GuruTibet'
                  })}
                </Link>
              </li>

              <li>
                <Link
                  href={LINK_PHOTO_GALLERY}
                  className={cn(linkClassName, {
                    [linkActiveClassName]: isActive(LINK_PHOTO_GALLERY)
                  })}
                >
                  {translate({
                    ru: 'Фотогалерея',
                    en: 'Photo Gallery'
                  })}
                </Link>
              </li>

              <li>
                <a
                  href={`/#${LINK_CONTACTS}`}
                  // onClick={(event) => {
                  //   smoothScroll(event, LINK_CONTACTS);
                  // }}
                  className={cn(linkClassName, {
                    [linkActiveClassName]: isActive(`/#${LINK_CONTACTS}`)
                  })}
                >
                  {translate({
                    ru: 'Контакты',
                    en: 'Contacts'
                  })}
                </a>
              </li>
              <li className="flex gap-2">
                <Link href={LINK_TELEGRAM} target="_black">
                  <TelegramIcon className="w-8 h-8" />
                </Link>
                <a href={LINK_WHATSAPP} target="_blank">
                  <WhatsAppIcon className="w-8 h-8" />
                </a>
              </li>

              <li>
                <a
                  onClick={(event) => {
                    const newLanguage = language === 'ru' ? 'en' : 'ru'
                    console.log(language, newLanguage)
                    setLanguage(newLanguage)
                  }}
                  className="block py-2 px-3 rounded text-xs md:text-base md:border-0 md:p-0 cursor-pointer"
                >
                  <div className="flex items-center relative">
                    <span className="text-3xl absolute left-0">
                      {language === 'ru' ? '🇺🇸' : '🇷🇺'}
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NavbarHeightCompensation = () => {
  return <div className="h-20 md:h-32" />;
}

export const NavbarHamburger: React.FC = () => {
  const translate = useTranslateFn()
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white rounded-lg transition focus:bg-slate-100 active:bg-slate-100">
            <AlignJustifyIcon />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {translate({
              ru: 'Меню',
              en: 'Menu'
            })}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={LINK_ABOUT_US}>
            <DropdownMenuItem>
              {translate({
                ru: 'О нас',
                en: 'About Us'
              })}

            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={`/#${LINK_OFFERS}`}>
            <DropdownMenuItem>
              {translate({
                ru: 'Программы',
                en: 'Tours'
              })}
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={LINK_PREPARING_FOR_TRIP}>
            <DropdownMenuItem>
              {translate({
                ru: 'Подготовка к поздке',
                en: 'Preparing for the trip'
              })}
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={LINK_GURUTIBET}>
            <DropdownMenuItem>
              GuruTibet
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={LINK_PHOTO_GALLERY}>
            <DropdownMenuItem>
              {translate({
                ru: 'Фотогалерея',
                en: 'Photo Gallery'
              })}
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={`/#${LINK_CONTACTS}`}>
            <DropdownMenuItem>
              {translate({
                ru: 'Контакты',
                en: 'Contacts'
              })}
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={LINK_TELEGRAM} target="_blank">
            <DropdownMenuItem className="flex gap-2">
              <span>Telegram</span>
              <TelegramIcon className="w-6 h-6" />
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={LINK_WHATSAPP} target="_blank">
            <DropdownMenuItem className="flex gap-2">
              <span>WhatsApp</span>
              <WhatsAppIcon className="w-6 h-6" />
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div >
  )
}

export const NavbarHamburgerStory: React.FC = () => {
  return (
    <NavbarHamburger />
  )
}

export const GuruTibetBanner: React.FC = () => {
  return (
    <div className="relative max-w-sm w-full h-[680px] z-100">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute h-full w-full z-10">
        <div className="flex flex-col justify-between h-full">
          <div className="text-2xl md:text-4xl font-semibold p-4 cursor-default">

          </div>
          <div className="text-lg md:text-2xl text-gray-200 cursor-default px-4 pt-20">
            Авторские туры по Тибету вместе с Алексеем Перчуковым
          </div>
          <div className="text-gray-200 text-sm md:text-sm cursor-default px-4 pt-8">
            Первое знакомcтво с Тибетом, все самое лучшее в Тибете,  истоки четырех священных рек, исследование мандалы Кайласа
          </div>
          <div className="p-4">
            <Link href="https://gurutibet.com" target="_blank">
              <Button variant={"secondary"}>Перейти на сайт GuruTibet</Button>
            </Link>
          </div>
        </div>
      </div>
      <img src="/opentibet-banner.jpg" className="absolute top-0 w-full h-full" style={{ zIndex: -1 }} />
    </div>
  )
}

export const GuruTibetBannerStory: React.FC = () => {
  return (
    <GuruTibetBanner />
  )
}

export const Footer = () => {
  return (
    <div>
      <div className="max-w-[30vh] pb-18">
        <div className="flex pt-8 pb-4 opacity-80">
          <div className="w-[33%] h-[40px] flex items-center justify-center">
            <Image
              src="/ctt.png"
              alt="China Tibet Tour"
              height={80}
              width={80}
              className="object-contain w-28 h-[68px] saturate-0 contrast-125"
            />
          </div>
          <div className="w-[33%] h-[40px] flex items-center justify-center">
            <Image
              src="/kailash.png"
              alt="Kailash Explorer"
              height={309}
              width={551}
              className="object-contain w-28 h-16 saturate-0 contrast-150"
            />
          </div>
          <div className="w-[33%] h-[40px] flex items-center justify-center">
            <Image
              src="/logo-tibet-vista.jpg"
              alt="Tibet Vista Travel Agency"
              height={100}
              width={100}
              placeholder="empty"
              style={{ filter: "grayscale(100%)" }}
              className="object-contain w-28 h-16"
            />
          </div>

        </div>

      </div>
      <Copyright />

    </div>
  )
}

export const PageBreadcrumbs: React.FC<{
  title: string
  theme?: 'light' | 'dark'
}> = ({ title, theme }) => {
  const translate = useTranslateFn();
  return (
    <Breadcrumb className="pb-4">
      <BreadcrumbList>
        <BreadcrumbItem >
          <BreadcrumbLink className={cn("text-sm md:text-md", {
            "text-white": theme === 'dark',
            "hover:text-gray-400": theme === 'dark',
          })} href="/">{translate({
            ru: "Главная",
            en: "Home",
          })}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className={cn("text-sm md:text-md", {
            "text-gray-200": theme === 'dark',
          })} >{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export const PreparingForTrip = () => {
  const translate = useTranslateFn();
  return (
    <div id={LINK_TIBET_PREPARATION}>
      <div>
        <Header
          title={
            translate({
              ru: "Подготовка к поездке",
              en: "Preparing for the trip",
            }) as string
          }
          subtitle=""
        />
        <p>
          {translate({
            ru: `Поездка в Тибет требует тщательной подготовки. Мы собрали для вас
              сведения, которые помогут вам подготовиться духовно и физически.`,
            en: `A trip to Tibet requires careful preparation. We have collected information for you that will help you prepare spiritually and physically.`,
          })}
        </p>
      </div>
      <div className="p-1">
        <div className="w-full h-[315px] mt-5 mb-2 md:h-96">
          <iframe
            width="100%"
            // height="315"
            height="100%"
            src="https://www.youtube.com/embed/YmAMQHDuP2k?si=pfVRQfVv36idRIrm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>


      </div>
      <div>
        <ButtonWithContent
          title={
            translate({
              ru: "Личный опыт Алексея Перчукова",
              en: "Personal experience of Alexey Perchukov",
            }) as string
          }
        >
          <div className="p-4 leading-8 hyphens-auto">
            <p className="leading-8">
              {translate({
                ru: `Хочу поделиться своим опытом, благодаря которому мне удалось
              достичь уникальных результатов без использования медицинских
              препаратов.`,
                en: `I want to share my experience, thanks to which I was able to achieve unique results without the use of medications.`,
              })}
            </p>
            <p className="my-4 leading-8">
              {translate({
                ru: `Наилучшим образом подготовиться к путешествию в Тибет мне
                  помогли сухие голодания. Этот метод хорош тем, что имеет своим
                  следствием комплексную перестройку деятельности всех систем
                  организма. В нем запускаются естественные оздоровительные
                  процессы. Если в 2007 году я с большим трудом прошел обычную
                  Кору за три дня, то после двух лет практики сухих голоданий (3,
                  5, 7, 9 и 11 дней; каждый квартал я добавлял по два дня), мне не
                  составило труда обойти священную гору за 9 часов.`,
                en: `Dry fasting helped me best prepare for the trip to Tibet. This method is good because it results in a comprehensive restructuring of the activities of all body systems. Natural healing processes are launched in it. If in 2007 I walked through the usual Kora in three days with great difficulty, then after two years of practicing dry fasting (3, 5, 7, 9 and 11 days; I added two days every quarter), it was not difficult for me to walk around the sacred mountain in 9 hours.`,
              })}
            </p>
            <p className="my-4 leading-8">
              {translate({
                ru: `Перед тем, как приступать к голоданиям, обязательно
                  проконсультируйтесь с врачом. Рекомендую начать с соблюдения два
                  раза в месяц экадаши (11-й день после полнолуния и новолуния).
                  Каждый квартал можно проводить длительные (3 дня и более) сухие
                  голодания, то есть полное исключение пищи и воды, или голодания
                  на воде. Если вы чувствуете непосредственную связь с Кайласом,
                  то лучше соблюдать как экадаши, так и прадош (13-й лунный день
                  на растущую и убывающую луну) – считается, что постящийся в эти
                  дни получает особое благословение Шивы.`,
                en: `Before you start fasting, be sure to consult your doctor. I recommend starting by observing Ekadashi twice a month (11th day after the full moon and new moon). Every quarter you can carry out long-term (3 days or more) dry fasting, that is, complete exclusion of food and water, or fasting on water. If you feel a direct connection with Kailash, then it is better to observe both Ekadashi and Pradosh (the 13th lunar day on the waxing and waning moon) - it is believed that the person fasting on these days receives a special blessing from Shiva.`,
              })}
            </p>
            <p className="my-4 leading-8">
              {translate({
                ru: `Важнейшее значение имеет выход из голоданий. Использование при
                  этом высокочастотной пищи, то есть продуктов с высокой частотой
                  вибраций, в которой не могут выжить вредные микроорганизмы,
                  увеличивает вибрацию всех клеток организма, из-за чего
                  повышается иммунитет и кардинально улучшается самочувствие.`,
                en: `The most important thing is to get out of fasting. The use of high-frequency food, that is, products with a high frequency of vibrations in which harmful microorganisms cannot survive, increases the vibration of all cells of the body, which increases immunity and radically improves well-being.`,
              })}
            </p>
            <p className="my-4 leading-8">
              {translate({
                ru: `После нескольких месяцев подобных практик вы легко перейдете к
                  вегетарианству, а затем и к раздельному питанию.`,
                en: `After several months of such practices, you will easily switch to vegetarianism, and then to separate meals.`,
              })}
            </p>
            <p className="my-4 leading-8">
              {translate({
                ru: `Но это еще не все. Изменения будут происходить на ментальном
                  уровне – появится потребность в духовной (высокочастотной)
                  информации. Ее можно найти в ведической литературе. Если
                  говорить о моем опыте, то после голоданий я по-новому, более
                  глубоко стал понимать Махабхарату , Пураны , а также увлекся
                  учением Г. И. Гурджиева.`,
                en: `But that is not all. Changes will occur at the mental level - there will be a need for spiritual (high-frequency) information. It can be found in Vedic literature. If we talk about my experience, then after fasting I began to understand the Mahabharata, Puranas in a new, more profound way, and also became interested in the teachings of G.I. Gurdjieff.`,
              })}
            </p>
            <p className="my-4 leading-8">
              {translate({
                ru: `Аскетические практики позволяют настроить организм на
                  энергетические поля Тибета и смягчают во время поездки их
                  воздействие, зачастую разрушительное для неподготовленного
                  человека. Конечной целью подобных практик, несомненно, является
                  изменение сознания. Я думаю, что этого можно достичь и с помощью
                  произнесения мантр или чтения молитв, однако такой путь займет
                  много времени, а самое главное – для него нужна сильная вера.`,
                en: `Ascetic practices allow you to attune your body to the energy fields of Tibet and soften their impact during the trip, which is often destructive for an unprepared person. The ultimate goal of such practices is undoubtedly a change in consciousness. I think this can be achieved by chanting mantras or reciting prayers, but this path will take a lot of time, and most importantly, it requires strong faith.`,
              })}
            </p>
            <p className="my-4 leading-8">
              {translate({
                ru: `Одновременно с голоданиями я регулярно выполнял комплекс
                  упражнений, связанных с задержкой дыхания. Вызывание
                  искусственной гипоксии в обычных условиях ускоряет начало
                  долговременной высотной адаптации в горах`,
                en: `Along with fasting, I regularly performed a set of exercises involving holding my breath. Inducing artificial hypoxia under normal conditions accelerates the onset of long-term altitude adaptation in the mountains`,
              })}
            </p>
          </div>
        </ButtonWithContent>
      </div>
      <div>
        <ButtonWithContent
          title={
            translate({
              ru: "Высотная болезнь",
              en: "Altitude sickness",
            }) as string
          }
        >
          <div className="p-4 leading-8">
            {translate({
              ru: `Это главная опасность, подстерегающая путешественников в горах.
              Из-за разреженного воздуха и недостаточного количества кислорода в
              организме человека развивается гипоксия.`,
              en: "This is the main danger that awaits travelers in the mountains. Due to thin air and insufficient oxygen, hypoxia develops in the human body.",
            })}
            <br />
            <br />
            {translate({
              ru: `Разновидностью высотной болезни является горная болезнь, когда
                гипоксия усугубляется переутомлением, резкими перепадами
                температур, охлаждением и обезвоживанием организма и пр.
                Вследствие нехватки кислорода клеточные мембраны и стенки сосудов
                становятся более проницаемыми, а кровяное давление растет – так
                организм пытается увеличить перенос кислорода в ткани.`,
              en: "A type of altitude sickness is mountain sickness, when hypoxia is aggravated by overwork, sudden temperature changes, cooling and dehydration of the body, etc. Due to lack of oxygen cell membranes and vessel walls become more permeable, and blood pressure rises - this is how the body tries to increase the transfer of oxygen to the tissues.",
            })}
            <br />
            <br />
            {translate({
              ru: `В результате плазма крови начинает просачиваться через стенки
                сосудов и возникают отеки. Наиболее опасными являются отек
                головного мозга и легких. Человек испытывает головную боль,
                головокружение, тошноту.`,
              en: "As a result, blood plasma begins to leak through the walls of blood vessels and edema occurs. The most dangerous are cerebral and pulmonary edema. The person experiences a headache, dizziness, nausea.",
            })}
            <br />
            <br />
            {translate({
              ru: `Дальнейшее развитие болезни характеризуется замедлением реакции,
                ухудшением координации движений, неадекватным восприятием
                действительности, потерей сознания. При отсутствии должного ухода
                и лечения может наступить смерть.`,
              en: "Further development of the disease is characterized by a slower reaction, deterioration in coordination of movements, inadequate perception of reality, and loss of consciousness. Without proper care and treatment, death can occur.",
            })}
          </div>
        </ButtonWithContent>
        <ButtonWithContent
          title={
            translate({
              ru: "Акклиматизация и адаптация",
              en: "Acclimatization and adaptation",
            }) as string
          }
        >
          <div className="p-4 leading-8">
            Различают краткосрочную и долгосрочную высотные адаптации.
            <br />
            <br />
            Во время краткосрочной адаптации организм человека мобилизует все
            доступные ему средства для интенсификации процесса переноса
            кислорода: увеличиваются частота дыхания, сердцебиение, мозговой
            кровоток (ткани мозга вообще потребляют значительно больше
            кислорода, чем мышцы). Из депо селезенки экстренно вбрасываются в
            кровь содержащие гемоглобин эритроциты. Перераспределение
            кровотока, с одной стороны, приводит к головным болям, с другой –
            может быть причиной нарушения терморегуляции организма.
            <br />
            <br />
            Для комфортного многодневного пребывания в горах необходима
            долгосрочная высотная адаптация. Фактически это глубокая
            структурная перестройка всего организма, направленная на
            увеличение потенциала жизненно важных систем, более экономное
            расходование внутренних ресурсов, совершенствование механизмов
            утилизации кислорода в тканях.
            <br />
            <br />
            Процесс акклиматизации человека к пребыванию на высоте может быть
            поэтапным и ступенчатым.
            <br />
            <br />
            Поэтапный способ акклиматизации происходит при постоянном подъеме
            вверх. Человек взбирается на первую высоту маршрута. Кислорода уже
            не хватает, начинается краткосрочная адаптация организма, которая
            через некоторое время переходит в долгосрочную. Появившиеся
            симптомы легкой высотной болезни (учащенный пульс, легкая одышка,
            возможная головная боль) проходят, и путешественник чувствует в
            себе силы подниматься еще выше. Дальше все повторяется вновь и т.
            д. При таком способе акклиматизации силы и ресурсы организма
            расходуются неэкономно; с каждой новой высотой человек все больше
            устает, а интенсивность перестройки его организма снижается.
            <br />
            <br />
            Наиболее эффективной представляется ступенчатая акклиматизация. В
            этом случае подъемы чередуются со спусками (принцип пилы). Вы
            поднимаетесь на высоту, затем спускаетесь, восстанавливаете свои
            силы, поднимаетесь еще выше, снова спускаетесь и т.д. Данная схема
            восхождения обеспечит максимальную адаптацию организма. Для
            успешного прохождения Коры и хорошего самочувствия в течение всего
            путешествия примерный маршрут должен строиться следующим образом:
            два дня – набор высоты, день – спуск, затем день отдыха. Далее
            вновь подъем на уже достигнутую ранее высоту, два дня – дальнейший
            подъем вверх, потом опять дневной переход вниз и день отдыха. Отек
            внутренних органов и тканей в положении лежа усиливается. Связано
            это с тем, что кровь уходит из мышц в депо и ткани, что лишь
            усугубляет отек. Кроме того, в положении лежа верхняя часть
            туловища становится более полнокровна, и на отток перестает
            действовать гравитация.
          </div>
        </ButtonWithContent>
        <ButtonWithContent
          title={
            translate({
              ru: "Ночевки в горах",
              en: "Overnight in the mountains",
            }) as string
          }
        >
          <div className="p-4 leading-8">
            Наибольшую опасность для неподготовленных путешественников
            представляют ночевки в горах, когда во время сна контроль сознания
            над дыханием отключается, а тело принимает горизонтальное
            положение. Во время бодрствования днем в горах при нехватке
            кислорода глубина и частота дыхания усиливаются, увеличивается
            скорость выведения из крови углекислого газа. А ведь именно
            высокий уровень углекислого газа в крови является важным стимулом
            усиления возбуждения дыхательного центра. Во сне дефицит кислорода
            сказывается больше, и нередко возникает следующая ситуация: сердцу
            не хватает кислорода, интенсивность прокачки крови замедляется,
            количество кислорода в организме еще больше уменьшается. Важным
            фактором является естественная активизация в ночной период времени
            парасимпатической части вегетативной нервной системы, в первую
            очередь такого ее представителя, как нерв вагус (10-я пара
            черепно-мозговых нервов). Благодаря ему усиливается активизация
            процессов, происходящих во внутренних органах, и снижаются частота
            сердечных сокращений и сердечный выброс, что в конечном итоге
            ведет к нарастанию отека в тканях и к прогрессированию тканевой
            гипоксии. В итоге утром человек вообще не в состоянии что-либо
            делать.
            <br />
            <br />
            Во время высокогорных ночевок необходимо тщательным образом
            контролировать пульс. Допустим, что при легкой форме горной
            болезни вечером ваш пульс обычно превышает 100 ударов в минуту.
            Тогда к утру он должен снизиться до 80–90 ударов в минуту. Если
            этого не произошло, значит, организм не адаптировался к высоте, и
            дальнейший подъем не рекомендуется.
            <br />
            <br />
            Сон при высокогорных ночевках должен быть обязательно крепким, а
            пробуждение – легкое. Тогда вы будете чувствовать себя
            отдохнувшими. Только во время крепкого сна уменьшается потребление
            мозгом кислорода, восстанавливается активность всех центров
            организма и накапливается необходимая для дальнейших переходов
            энергия. Такой сон – лучшая профилактика отека мозга.
            <br />
            <br />
            Важнейшее значение имеет гигиена сна после дневного перехода. Как
            правило, вечером начинается головная боль, вызванная кислородным
            голоданием мозга. Это происходит потому, что днем легкие и сердце
            интенсивно работают, обеспечивая мышечную активность и поступление
            насыщенной кислородом крови в мозг, а вечером физическая
            активность снижается. Головную боль нельзя терпеть: она будет
            только усиливаться, а общее самочувствие – ухудшаться. Немедленно
            принимайте таблетки. Мне, например, очень хорошо помогает
            спазмалгон, а профессиональные альпинисты рекомендуют растворимый
            солпадеин: он не только снимает головную боль, но и улучшает общее
            состояние организма.
            <br />
            <br />
            Перед сном также нельзя пить кофе. Кроме того, необходимо
            обеспечить хорошую вентиляцию спального помещения – в противном
            случае к утру гипоксия усилится. Во сне не допускать положение ног
            выше головы!
            <br />
            <br />
            Еще одной проблемой является бессонница. Попробуйте расслабиться
            под музыку. Если в течение часа уснуть не получится, надо принять
            лекарственный препарат, например, димедрол. Это и снотворное, и
            хороший антигистаминный препарат. Также могу порекомендовать более
            легкие таблетки: мелатонин (3мг) или стрезам. Если принимать их в
            указанных в инструкции дозах, проблем не будет. Перед поездкой,
            обязательно проконсультируйтесь с врачом и убедитесь в
            эффективности и безвредности этих препаратов для своего организма
            и отсутствии побочных эффектов.
            <br />
            <br />
            Как и в случае с головной болью, терпеть бессонницу ни в коем
            случае нельзя. Забудьте аргументы, что снотворное может привести к
            вялости поутру. Не приняв вовремя таблетки, человек не высыпается
            и на следующий день становится еще более апатичным, чем от приема
            снотворного. Физические тренировки
            <br />
            <br />
            Перед поездкой в Тибет физические тренировки необходимы для
            улучшения работы сердца, сосудов и дыхательной системы. За два
            месяца или за месяц до отъезда начните совершать пробежки или
            катайтесь на велосипеде, желательно не менее чем три раза в неделю
            по 5 км, а лучше всего ежедневно по 10 км. Тренировки не должны
            быть утомительными, ведь главное в путешествии – это хорошее
            физическое и психоэмоциональное самочувствие.
          </div>
        </ButtonWithContent>
        <ButtonWithContent
          title={
            translate({
              ru: "Собираем вещи на Кору вокруг Кайласа",
              en: "Packing for Kora around Kailash",
            }) as string
          }
        >
          <div className="p-4">
            <div className="w-full h-[315px] mt-5 mb-2 md:h-96">
              <iframe
                width="100%"
                // height="315"
                height="100%"
                src="https://www.youtube.com/embed/5KtoeQl4rW4?si=W8tHtnfAKdzWxDgw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </ButtonWithContent>
        <ButtonWithContent
          title={
            translate({
              ru: "Что взять с собой?",
              en: "What to take with you?",
            }) as string
          }
        >
          <div className="p-4">
            <ul className="list-decimal list-outside ms-5 leading-7 space-y-1 hyphens-auto">
              <li>Термобельё.</li>
              <li>Спальник для температур до −10&nbsp;°С.</li>
              <li>
                Тёплый вкладыш в спальник, если собираетесь брать спальник
                напрокат.
              </li>
              <li>
                Тёплые вещи для сна (в том числе шапку, шерстяные перчатки и
                носки).
              </li>
              <li>
                Непромокаемые высокие кроссовки для треккинга с рифлёной
                подошвой.
              </li>
              <li>Непромокаемые штаны (для совершения Коры).</li>
              <li>Флиска (куртка из флиса).</li>
              <li>Шерстяные носки или термоноски (2 пары).</li>
              <li>Шапка шерстяная.</li>
              <li>Перчатки (лучше 2 пары: флисовые и непромокаемые).</li>
              <li>Непромокаемая куртка (ветровка goretex).</li>
              <li>Сменная одежда и бельё.</li>
              <li>Сменная обувь (лёгкие кроссовки ).</li>
              <li>Небольшой рюкзак (25-30 л).</li>
              <li>Шарф (шаль).</li>
              <li> Набор приборов для еды (нож, ложка, вилка, кружка).</li>
              <li>Пластиковый контейнер (миска).</li>
              <li>Кипятильник.</li>
              <li>Термос (1 л).</li>
              <li>
                {" "}
                Альпинистские «кошки» (желательно — для тех, кто пойдёт к
                северному склону).
              </li>
              <li>Полотенце туристическое (быстросохнущее).</li>
              <li>Две палки для треккинга.</li>
              <li>Налобный фонарик и батарейки.</li>
              <li>
                {" "}
                Беруши (на случай, если будут лаять собаки и храпеть соседи).
              </li>
              <li>Солнцезащитный крем.</li>
              <li>Гигиеническая помада.</li>
              <li>Влажные салфетки.</li>
              <li>Туристическая сидушка.</li>
              <li>Зонт.</li>
              <li>
                {" "}
                Еда: чай травяной, мёд, орехи, сухофрукты, каши быстрого
                приготовления, копчёный сыр.
              </li>
            </ul>
          </div>
        </ButtonWithContent>
        <ButtonWithContent
          title={
            translate({
              ru: "Аптечка",
              en: "First aid kit",
            }) as string
          }
        >
          <div className="p-4 leading-8 hyphens-auto">
            <p className="leading-8">
              Перед поездкой обратитесь к врачу обязательно!
            </p>
            <p className="my-4 leading-8">
              Посетите своего лечащего врача, посоветуйтесь, какие средства
              вам лучше подойдут для снятия описанных ниже симптомов (в первую
              очередь – головная боль, бессонница, проблемы с давлением). Но
              даже самому опытному доктору будет трудно предсказать реакцию
              организма человека, впервые оказавшегося в условиях высокогорья.
            </p>
            <p className="my-4 leading-8">
              Основываясь на многолетнем опыте, могу порекомендовать до
              поездки и во время нее принимать поливитамины, содержащие все
              микроэлементы, например «Витрум», «Дуовит», «Центрум», а также
              ферментные средства – «Мезим» или «Биозим». На собственном опыте
              я убедился в том, что пищеварение на высоте работает не так, как
              в обычных условиях.
            </p>
            <p className="my-4 leading-8">
              Для улучшения общего самочувствия можно использовать такие
              препараты, как «Фенотропил», «Эскузиан», глютаминовая кислота,
              «Панангин».
            </p>
            <p className="my-4 leading-8">
              Для повышения иммунитета и укрепления стенок сосудов –
              «Капилар». Прием лучше начать за 15–60 дней до поездки, в
              зависимости от самочувствия.
            </p>
            <p className="my-4 leading-8">
              Если вы метеозависимы, у вас частые головные боли или
              остеохондроз шейного отдела позвоночника, то для улучшения
              мозгового кровообращения примерно за 30 дней до поездки нужно
              начать принимать «Кавинтон» или «Гинкго Билоба».
            </p>
            <p className="my-4 leading-8">
              Для преодоления последствий гипоксии прекрасно подходят
              «Гипоксен» (за неделю до путешествия), а также «Глицин» и
              «Милдронат». Два последних препората надо начать принимать за
              две недели до поездки. «Милдронат» – хороший энергетик для
              профилактики сердечной недостаточности.
            </p>
            <p className="my-4 leading-8">
              Для снижения воздействия на организм деятельности активно
              потребляющих кислород аэробных бактерий толстого кишечника
              рекомендую «Линекс», «Бифиформ», а также различные пробиотики и
              пребиотики (за месяц до поездки). Это очень важно, так как
              процесс пищеварения на высоте проходит иначе, и обязательно надо
              помочь организму переваривать и усваивать пищу.
            </p>
            <p className="my-4 leading-8">
              Для защиты печени от последствий гипоксии подойдут «Карсил»,
              «Ливолин Форте», «Метионин».
            </p>
          </div>
        </ButtonWithContent>


        <ButtonWithContent
          title={
            translate({
              ru: "Тренировка ",
              en: "Training",
            }) as string
          }
        >
          <div className="p-4">
            <div className="w-full h-[315px] mt-5 mb-2 md:h-96">


              <iframe
                width="100%"
                // height="315"
                height="100%"
                src="https://www.youtube.com/embed/VvDKIhqbX58?si=-fkefqK4JDBLXyR8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>      </div>

        </ButtonWithContent>


        <ButtonWithContent
          title={
            translate({
              ru: "Подготовка к Кайлас-Коре. Секреты выносливости  ",
              en: "Preparation for Kailash Kora. Secrets of Endurance",
            }) as string
          }
        >
          <div className="p-4">
            <div className="w-full h-[315px] mt-5 mb-2 md:h-96">


              <iframe
                width="100%"
                // height="315"
                height="100%"
                src="https://www.youtube.com/embed/kF6n3lWBstM?si=VML_yD9o8yJoAxF8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>      </div>

        </ButtonWithContent>



      </div>
    </div>
  )
}


export const BuyBookButtonContainer: React.FC = () => {
  const reachGoal = () => {
    if (window && (window as any).ym !== undefined) {
      (window as any).ym('95954530', 'reachGoal', 'FORM_SUBMIT')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full bg-blue-500 hover:bg-blue-700'>
          Заказать путеводитель
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Заказать путеводитель
          </DialogTitle>
          <DialogDescription>
            Книга "Путеводитель по Тибету" придёт с автографом Алексея Перчукова
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          Чтобы заказать книгу, напишите нам на почту <a className="text-blue-500" href="mailto:office@gurutibet.com" onClick={reachGoal}>office@gurutibet.com</a> или в мессенджер:
          <div className="flex items-center justify-center pt-4">
            <Link href={LINK_TELEGRAM} target="_blank" onClick={reachGoal}>
              <TelegramIcon className="w-10 h-10 mx-1 cursor-pointer" />
            </Link>
            <Link href={LINK_WHATSAPP} target="_blank" onClick={reachGoal}>
              <WhatsAppIcon className="w-10 h-10 mx-1 cursor-pointer" />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export const LoadingSpinner: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const translate = useTranslateFn()

  return (
    <div className="text-center text-xs text-gray-500 py-4">
       OPEN TIBET © {translate({
        ru: 'Все права защищены',
        en: 'All rights reserved'
      })}
      <div className="flex items-center justify-center pt-4">
        <Link href={LINK_TELEGRAM} target="_blank">
          <TelegramIcon className="w-8 h-8 mx-1 cursor-pointer" />
        </Link>
        <Link href={LINK_WHATSAPP} target="_blank">
          <WhatsAppIcon className="w-8 h-8 mx-1 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export const smoothScroll = (event: React.MouseEvent, elementId: string) => {
  event.preventDefault();
  const elRef = document.getElementById(elementId);
  if (elRef) {
    elRef.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  // change location
  window.history.pushState({}, "", `#${elementId}`);
};

export const LinkTours: React.FC = () => {
  const translate = useTranslateFn()
  return (
    <Link href={`/#${LINK_OFFERS}`}>
      <div className="flex items-center gap-2 py-2 cursor-pointer">
        <span className="text-blue-500">{
          translate({
            ru: "Смотреть все программы",
            en: "View programs"
          })
        }</span>
        <svg className="w-4 h-4 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
        </svg>
      </div>
    </Link>
  )
}

export const WithLanguageProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru')
  return (
    <LanguageProvider value={{
      language: language,
      setLanguage: (language) => {
        setLanguage(language)
      }
    }}>
      {children}
    </LanguageProvider>
  )
}

export const TelegramIcon: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      className={className}
      viewBox="0 0 48 48">
      <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"></path><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"></path><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"></path>
    </svg>
  )
}

export const WhatsAppIcon: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"
      className={className}>
      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
    </svg>
  )
}


export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const translate = useTranslateFn();

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white px-4 py-4 shadow-xl flex justify-center">
      <div className="flex flex-col md:flex-row items-center gap-4 text-center">
        <span className="text-sm">
          {translate({
            ru: "Мы используем cookie-файлы для улучшения работы сайта.",
            en: "We use cookies to improve your browsing experience.",
          })}
        </span>
        <button
          onClick={handleAccept}
          className="bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition"
        >
          {translate({
            ru: "Принять",
            en: "Accept",
          })}
        </button>
      </div>
    </div>
  );
};
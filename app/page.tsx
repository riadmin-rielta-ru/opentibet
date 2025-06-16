"use client";

import Image from "next/image";
import tibetCss from "./tibet.module.css";
import { CookieBanner } from "../components/components"; // путь зависит от структуры

import {
  Arrow,
  PhotoGallery,
  FAQ,
  AbstractButton,
  ActionButton,
  IconArrowDown,
  IconArrowClose,
  TourButton,
  BackgroundSlider,
  ButtonWithContent,
  Header,
  ApplyForm,
  Navbar,
  Footer,
  PreparingForTrip,
  WithLanguageProvider,
  BuyBookButtonContainer,
  GuruTibetBanner
} from "../components/components";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TibetInfo } from "@/components/TibetInfo";
import {
  LINK_CONTACTS,
  LINK_WELCOME_SCREEN,
  LINK_OFFERS,
  getTourPriceForMonth,
  LINK_TELEGRAM,
  LINK_APPLY_FORM,
} from "@/utils/constants";
import Link from "next/link";
import {
  Language,
  LanguageProvider,
  useLanguage,
  useTranslate,
  useTranslateFn,
  useTranslateMap,
} from "@/lib/language";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <WithLanguageProvider>
      <Home />
    </WithLanguageProvider>
  );
}

function Home() {
  const translate = useTranslateFn();
  return (
    <main
      lang="ru"
      className="flex min-h-screen flex-col items-center"
    >
      <Navbar />
      <div
        className="w-full h-[93vh] mt-[-5vh] relative"
        id={LINK_WELCOME_SCREEN}
      >
        <video
          id="background-video"
          className="absolute w-full h-full object-cover saturate-[1.15] brightness-[1.2]"
          autoPlay
          playsInline
          muted
          poster="https://storage.googleapis.com/opentibet/doors-4-preview.jpg"
        >
          <source
            src="https://storage.googleapis.com/opentibet/doors-4-compressed.mp4"
            type="video/mp4"
          />
          <source
            src="https://storage.googleapis.com/opentibet/doors-4.webm"
            type="video/webm"
          />
        </video>
        {/* <video src='https://storage.googleapis.com/opentibet/doors-2.mp4' autoPlay muted loop playsInline className='w-full h-full absolute object-cover'></video> */}
        {/* <div className='absolute inset-0 bg-black opacity-20'></div> */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0) 50%)",
          }}
        />
        <div className="h-full flex flex-col justify-end items-center px-4 md:px-20 relative z-100">
          <div className="max-w-4xl w-full mb-[5vh]">
            <div
              className="text-white font-bold text-5xl md:text-[4em] uppercase tracking-wider leading-[1.15em]"
              style={{
                textShadow: "0 3px 20px rgba(0, 0, 0, .6)",
              }}
            >
              {translate({
                ru: (
                  <>
                    Открой
                    <br />
                    для&nbsp;себя
                    <br />
                    Тибет
                  </>
                ),
                en: (
                  <>
                    Discover
                    <br />
                    Tibet
                  </>
                ),
              })}
            </div>
            <div className="text-white py-2 pr-6 text-base md:text-xl">
              {translate({
                ru: (
                  <>
                    Маршруты по доступным ценам
                    <br />
                    Пакетные туры от 2000 $
                  </>
                ),
                en: (
                  <>
                    Routes at affordable prices
                    <br />
                    Package tours from $2000
                  </>
                ),
              })}
            </div>
            <div className="py-4">
              <ActionButton />
            </div>
          </div>
        </div>
        <div className="hidden absolute bottom-0 z-10 w-full">
          <Arrow />
        </div>
      </div>

      <div className="w-full text-white">
        <div className="h-[45vh] relative">
          <div
            className="w-full -z-10 h-full top-0 object-cover"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/opentibet/batsum-tso.jpg)",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "60%",
            }}
          />
          <div className={tibetCss.triangle} />
          <Image
            src="opentibet-logo-v.svg"
            width={280}
            height={100}
            alt="Open Tibet Logo"
            className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-10"
          />
        </div>
      </div>

      <div
        className="w-full text-white relative"
        style={{
          backgroundImage:
            'url("https://storage.googleapis.com/opentibet/kailash_alt.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
          }}
        />
        <div className="h-full flex flex-col justify-center items-center px-4 md:px-20 py-10 md:py-40 relative z-100">
          <div className="max-w-5xl w-full">
            <div className="text-3xl font-semibold text-center w-full px-4 mt-5 mb-5">
              {translate({
                ru: "Тибет меняет жизнь. Проверьте и вы",
                en: "Tibet changes lives. Check it out too",
              })}
            </div>
            <div className="text-xl font-light w-9/12 mx-auto text-center leading-7">
              {translate({
                ru: `Мы знаем и любим Тибет. Мы хотим, чтобы как можно больше людей
                открывали для себя эту священную землю.`,
                en: "We know and love Tibet. We want as many people as possible to discover this sacred land.",
              })}
              <br />
              <br />
            </div>
            <div className="w-full flex justify-center p-4">
              <ActionButton />
              <h2 className="text-2xl font-light mt-3 leading-8">
                {translate({
                  ru: ``,
                  en: "",
                })}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mt-4 mb-12 pt-4 md:pt-14 w-full">
        <WhyGoTibetWithUs />
      </div>

      <ToursTabs />
      <div className="pt-10" />

      <div className="max-w-4xl w-full flex justify-center pb-8">
        <GuruTibetBanner />
      </div>

      <div className="w-full bg-blue-500 text-white py-12">
        <div className="max-w-4xl w-full mx-auto">
          <div className="px-2 md:px-0">
            <Header
              title={
                translate({
                  ru: "Достопримечательности Тибета по регионам",
                  en: "Iconic places of Tibet",
                }) as string
              }
              subtitle={
                translate({
                  ru: "",
                  en: "",
                }) as string
              }
            />
          </div>
          <TibetInfo />
        </div>
      </div>

      <div className="pt-10" />

      <div className="max-w-4xl w-full">
        <div className="px-2 md:px-0">
          <Header
            title={
              translate({
                ru: "Часто задаваемые вопросы",
                en: "FAQ",
              }) as string
            }
            subtitle=""
          />
        </div>
        <FAQ />
      </div>

      <div className="pt-10" />
      <div className="max-w-4xl w-full">
        <ApplyForm />
        <div className="px-2 md:px-0">
          <Header
            title={
              translate({
                ru: "Контакты",
                en: "Contacts",
              }) as string
            }
            subtitle={
              translate({
                ru: "Алексей Перчуков",
                en: "Alexey Perchukov",
              }) as string
            }
            id={LINK_CONTACTS}
          />
        </div>
        <div className="p-4 pt-0">
          <div className="py-2">
            <input
              type="tel"
              value="+7 981 160 88 00"
              className="text-3xl max-w-full"
              readOnly
            />
            <div className="text-[10px] uppercase tracking-wider font-bold">
              {translate({
                ru: "Россия",
                en: "RUSSIA",
              })}
            </div>
          </div>
          <div className="py-2">
            <input
              type="tel"
              value="+86 153 4891 9180"
              className="text-3xl max-w-full"
              readOnly
            />
            <div className="text-[10px] uppercase tracking-wider font-bold">
              {translate({
                ru: "Китай",
                en: "CHINA",
              })}
            </div>
          </div>

          <div className="py-2">
            <Link href={LINK_TELEGRAM} target="_blank" className="text-2xl max-w-full text-blue-500">
              {LINK_TELEGRAM}
            </Link>
            <div className="text-[10px] uppercase tracking-wider font-bold">
              {translate({
                ru: "Telegram канал",
                en: "Telegram channel",
              })}
            </div>
          </div>

        </div>
      </div>
 <CookieBanner /> 
      <Footer />
    </main>
  );
}



const WhyGoTibetWithUs = () => {
  const translate = useTranslateFn();
  return (
    <>
      <div className="text-black font-semibold text-2xl md:text-3xl py-2 px-4">
        {translate({
          ru: "Почему стоит ехать в Тибет с нами?",
          en: "Why is it worth going to Tibet with us?",
        })}
      </div>

      <WhyGoTibetWithUsStatement
        title={
          translate({
            ru: "Глубокое знание Тибета",
            en: "Deep knowledge of Tibet",
          }) as string
        }
      >
        {translate({
          ru: `Приезжая в место исключительной силы, хочется узнать как можно больше
          обо всех его традициях, истоках. Мы действительно понимаем Тибет. Наши
          гиды — местные эксперты с огромным опытом, и они помогут вам раскрыть
          все тайны и красоту этой уникальной земли.`,
          en: `Coming to a place of exceptional power, you want to learn as much as possible about all its traditions and origins. We truly understand Tibet. Our guides are local experts with extensive experience and will help you discover all the secrets and beauty of this unique land.`,
        })}
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title={
          translate({
            ru: "Эксклюзивные маршруты",
            en: "Exclusive routes",
          }) as string
        }
      >
        {translate({
          ru: `Мы предлагаем эксклюзивные маршруты, которые недоступны большинству
          туристов. Вы увидите Тибет изнутри, открыв его магию и аутентичность.`,
          en: `We offer exclusive routes that are inaccessible to most tourists. You will see Tibet from the inside, discovering its magic and authenticity.`,
        })}
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title={
          translate({
            ru: "Индивидуальный подход",
            en: "Individual approach",
          }) as string
        }
      >
        {translate({
          ru: `Мы понимаем, что каждый клиент уникален. Мы создадим маршрут, который
          соответствует вашим интересам и пожеланиям, обеспечивая максимальный
          комфорт и удовлетворение.`,
          en: `We understand that every client is unique. We will create an itinerary that suits your interests and wishes, ensuring maximum comfort and satisfaction.`,
        })}
      </WhyGoTibetWithUsStatement>
      <WhyGoTibetWithUsStatement
        title={
          translate({
            ru: "Высокое качество услуг",
            en: "High quality services",
          }) as string
        }
      >
        {translate({
          ru: `Мы позаботимся обо всем, чтобы вы получили незабываемые впечатления, не
          переплачивая. Авторские маршруты, достойные отели, заботливые и
          компетентные гиды, хороший сервис. Ваше удовольствие и безопасность
          &mdash; наша главная задача.`,
          en: `We will take care of everything so that you get an unforgettable experience without overpaying. Author's routes, decent hotels, caring and competent guides, good service. Your pleasure and safety are our main concern.`,
        })}
      </WhyGoTibetWithUsStatement>
      <div className="w-full flex justify-center p-4">
        <AbstractButton label={
          translate({
            ru: "Оставить заявку",
            en: "Apply Now"
          }) as string
        } anchor={LINK_APPLY_FORM} />
      </div>

    </>
  );
};

const WhyGoTibetWithUsStatement: React.FC<{
  title: string;
  children: React.ReactNode;
  image?: string;
  imgSize?: number;
}> = ({ title, children, image, imgSize }) => {
  return (
    <div className="">
      <div className="py-4">
        <div className="flex items-center px-4">
          <div className="w-2 h-2 rounded-full bg-yellow-600 mr-2" />
          <div className="font-semibold text-lg">{title}</div>
        </div>
        <div className="leading-7 pt-1 px-4">{children}</div>
        {image && (
          <div className="py-5 md:py-10 flex justify-center">
            <div className="max-w-xl">
              <img
                src={image}
                className=""
                style={imgSize ? { maxWidth: imgSize } : undefined}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ToursTabs = () => {
  const translate = useTranslateFn();
  return (
    <div
      className="mt-12 max-w-4xl w-full scroll-m-[60px] md:scroll-m-[64px]"
      id={LINK_OFFERS}
    >
      <div className="px-2 md:px-0">
        <Header
          title={
            translate({
              ru: "Программы на 2025",
              en: "Programs for 2025",
            }) as string
          }
          subtitle=""
        />
      </div>
      <p className="mx-4 mb-6">
        {translate({
          ru: `Мы предлагаем как регулярные пакетные туры, так и эксклюзивные
          авторские маршруты.`,
          en: `We offer both regular package tours and exclusive signature routes.`,
        })}
      </p>
      <Tabs defaultValue="reg" className="w-full px-4">
        <TabsList className="shadow-inner shadow-black/20 border-black border-[2px] md:border-2 p-2 rounded-full h-min bg-white -mx-3 z-30 relative self-center flex">
          <TabsTrigger
            value="reg"
            className="rounded-full rounded-r-none w-1/2 h-[70px] m-0 transition-none md:whitespace-nowrap whitespace-normal 
              data-[state=inactive]:text-blue-500 shadow-xl shadow-black/30 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
          >
            <h3 className="px-2 md:px-6 font-bold uppercase leading-4 tracking-wide md:tracking-widest text-sm md:text-lg">
              {translate({
                ru: (
                  <>
                    Пакетные <br className="md:hidden" />
                    туры
                  </>
                ),
                en: (
                  <>
                    Package <br className="md:hidden" />
                    tours
                  </>
                ),
              })}
            </h3>
          </TabsTrigger>
          <TabsTrigger
            value="exc"
            className="rounded-full rounded-l-none w-1/2 h-[70px] m-0 transition-none md:whitespace-nowrap whitespace-normal
              data-[state=inactive]:text-black shadow-xl shadow-black/30 data-[state=active]:bg-black data-[state=active]:text-yellow-500"
          >
            <h3 className="px-2 md:px-6 font-bold uppercase leading-4 tracking-wide whitespace-nowrap md:tracking-widest text-sm md:text-lg">
              {/*<div className="rounded-full w-[1em] h-[1em] bg-yellow-500 inline-block mr-[0.33em] align-middle mb-[0.25em]"></div>*/}
              <span className="text-yellow-500 leading-3 text-lg md:text-2xl">
                ★
              </span>{" "}
              {translate({
                ru: (
                  <>
                    Эксклюзивные <br className="md:hidden" />
                    туры
                  </>
                ),
                en: (
                  <>
                    Exclusive <br className="md:hidden" />
                    tours
                  </>
                ),
              })}
            </h3>
          </TabsTrigger>
        </TabsList>

        <TabsContent className="bg-gray-200 mt-4 -mx-3 rounded-sm" value="reg">
          <h4 className="font-bold mx-3 pt-3 mt-2 leading-5 text-xl text-blue-500">
            {translate({
              ru: "Пакетные туры OPEN TIBET",
              en: "Package tours OPEN TIBET",
            })}
          </h4>
          <p className="font-semibold mx-3 mb-3 text-blue-500">
            {translate({
              ru: "Всё, что нужно паломнику. От 2000$",
              en: "Everything a pilgrim needs. From $2000",
            })}
          </p>
          <div>
            <Link href={"/tours/tibet-may-2025"} target="_blank">
              <TourButton
                title={
                  translate({
                    ru: "Май",
                    en: "May",
                  }) as string
                }
                subtitle="2—15 мая"
                days={14}
                price={getTourPriceForMonth("may")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-june-2025"} target="_blank">
              <TourButton
                title="Июнь"
                subtitle="6—19 июня"
                days={14}
                price={getTourPriceForMonth("june")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-july-2025"} target="_blank">
              <TourButton
                title="Июль"
                subtitle="2—15 июля"
                days={14}
                price={getTourPriceForMonth("july")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-august-2025"} target="_blank">
              <TourButton
                title="Август"
                subtitle="2—15 августа"
                days={14}
                price={"2300 (от 6 человек)"}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-september-2025"} target="_blank">
              <TourButton
                title="Сентябрь"
                subtitle="2—15 сентября"
                days={14}
                price={getTourPriceForMonth("september")}
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/tibet-october-2025"} target="_blank">
              <TourButton
                title="Октябрь"
                subtitle="2—15 октября"
                days={14}
                price={getTourPriceForMonth("october")}
                withIcon
                withBorder
              />
            </Link>
          </div>
        </TabsContent>

        <TabsContent className="bg-black mt-4 -mx-3 rounded-sm" value="exc">
          <h4 className="font-bold mx-3 pt-3 mt-2 leading-5 text-xl text-yellow-500">
            {translate({
              ru: "Эксклюзивные туры",
              en: "Exclusive Tours",
            })}
          </h4>
          <p className="font-semibold mx-3 mb-3 text-yellow-500">
            {translate({
              ru: "Авторские маршруты Алексея Перчукова",
              en: "Author's routes of Alexey Perchukov",
            })}
          </p>
          <div>
            <Link href={"/tours/2025/may"} target="_blank">
              <TourButton
                title="Май"
                subtitle="3—21 мая"
                days={21}
                price={"от 3500"}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/2025/june"} target="_blank">
              <TourButton
                title="Июнь"
                subtitle="15 июня - 3 июля"
                days={21}
                price={"от 3000"}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/2025/june-2"} target="_blank">
              <TourButton
                title="Июнь"
                subtitle="7 июня - 27 июня"
                days={21}
                price={"от 3300"}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/2025/september"} target="_blank">
              <TourButton
                title="Сентябрь"
                subtitle="3—22 сентября"
                days={22}
                price={"от 2500"}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
            <Link href={"/tours/2025/october"} target="_blank">
              <TourButton
                title="Октябрь"
                subtitle="10—28 октября"
                days={21}
                price={"от 2500"}
                bgColor="yellow-500"
                fgColor="black"
                accentColor="white"
                withIcon
                withBorder
              />
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// const Review: React.FC<{
//   name: string;
//   subtitle: string;
//   text: string;
// }> = ({ name, subtitle, text }) => {
//   return (
//     <figure className="flex flex-col p-4 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
//       <figcaption className="flex items-center space-x-3">
//         <img
//           className="rounded-full w-12 h-12"
//           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
//           alt="profile picture"
//         />
//         <div className="space-y-0.5 font-medium text-left">
//           <div>{name}</div>
//           <div className="text-xs text-gray-400">{subtitle}</div>
//         </div>
//       </figcaption>
//       <blockquote className="max-w-2xl mx-auto text-gray-800 text-sm lg:mb-8 leading-6">
//         <p className="my-3">{text}</p>
//       </blockquote>
//     </figure>
//   );
// };

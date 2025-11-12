"use client";

import { Footer, Navbar, NavbarHeightCompensation, PageBreadcrumbs, WithLanguageProvider } from '@/components/components';
import { useTranslateFn } from '@/lib/language';
import React from 'react'
import Image from 'next/image';
import { classNameMobilePaddingX } from '@/utils/constants';

export default function Page() {
    return (
        <WithLanguageProvider>
            <AbousUs />
        </WithLanguageProvider>
    );
}

const AbousUs = () => {
    const translate = useTranslateFn();
    return (
        <main
            lang="ru"
            className="flex min-h-screen flex-col items-center"
        >
            <Navbar />
            <NavbarHeightCompensation />

            <div className={`max-w-4xl ${classNameMobilePaddingX}`}>
                <PageBreadcrumbs title={translate({
                    ru: "О нас",
                    en: "Abous Us",
                }) as string} />




                <h2 className="text-3xl font-semibold text-center max-w-4xl mx-auto mb-10 mt-5">
                    {translate({
                        ru: "Мы делаем Тибет доступнее для вас",
                        en: "We make Tibet more accessible to you",
                    })}
                </h2>

                <div className="max-w-4xl">
                    <div className="p-4 pt-0">
                        <p className="text-xl leading-9 text-center">
                            {translate({
                                ru: (
                                    <>
                                        Путешествия с <b>OPEN TIBET</b> &mdash; это:
                                    </>
                                ),
                                en: <>Travel with OPEN TIBET is:</>,
                            })}
                        </p>
                        <ul className="py-4 mt-3 max-w-md text-xl w-fit mx-auto space-y-3 list-inside">
                            <li className="flex items-center">
                                <IconMark />
                                {translate({
                                    ru: "Размещение в хороших отелях",
                                    en: "Accommodation in good hotels",
                                })}
                            </li>
                            <li className="flex items-center">
                                <IconMark />
                                {translate({
                                    ru: "Качественный транспорт",
                                    en: "Quality transport",
                                })}
                            </li>
                            <li className="flex items-center">
                                <IconMark />
                                {translate({
                                    ru: "Квалифицированные гиды",
                                    en: "Qualified guides",
                                })}
                            </li>
                            <li className="flex items-center">
                                <IconMark />
                                {translate({
                                    ru: "Самые доступные цены",
                                    en: "The most affordable prices",
                                })}
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="px-4 mt-5 mb-4 max-w-4xl mx-auto leading-7">
                    {translate({
                        ru: `Мы много трудились над каждым элементом путешествий и получили
                всестороннюю поддержку правительства Тибета, чтобы обеспечить самые
                лучшие предложения для паломников.`,
                        en: "We have worked hard on every element of the travel experience and have received the full support of the Tibetan government to ensure the best possible offerings for pilgrims.",
                    })}
                </p>

                <p className="px-4 mb-8 max-w-4xl mx-auto leading-7">
                    {translate({
                        ru: `Это стало возможно благодаря партнёрству трёх агентств, имеющих годы
          опыта и высочайший профессионализм.`,
                        en: "This became possible thanks to the partnership of three agencies with years of experience and the highest professionalism.",
                    })}
                </p>

                <h3 className="uppercase tracking-[.4em] mt-4 mb-3 font-semibold text-sm text-center">
                    {translate({
                        ru: "Организаторы",
                        en: "ORGANIZERS",
                    })}
                </h3>
                <ul className="mx-auto w-fit mb-4 px-4 flex-col flex justify-center">
                    <li className="flex items-center my-2">
                        <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
                            <Image
                                src="/ctt.png"
                                alt="China Tibet Tour"
                                height={80}
                                width={80}
                                className="object-contain w-28 h-[68px]  cursor-pointer"
                            />
                        </div>
                        <div className="leading-5">
                            <span className="font-semibold">
                                {translate({
                                    ru: "Тибетский туристический офис",
                                    en: "Tibetan Tourism Office",
                                })}
                            </span>
                            <br />{" "}
                            <span>
                                {translate({
                                    ru: "правительство Тибета",
                                    en: "Government of Tibet",
                                })}
                            </span>
                        </div>
                    </li>
                    <li className="flex items-center my-2">
                        <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
                            <Image
                                src="/kailash.png"
                                alt="Kailash Explorer"
                                height={309}
                                width={551}
                                className="object-contain w-28 h-16  cursor-pointer"
                            />
                        </div>
                        <div className="leading-5">
                            <span className="font-semibold">
                                {translate({
                                    ru: "Турагентство Kailash Explorer",
                                    en: "Travel agency Kailash Explorer",
                                })}
                            </span>
                            <br />
                            {translate({
                                ru: "Россия, Санкт Петербург",
                                en: "Russia, St. Petersburg",
                            })}
                        </div>
                    </li>
                    <li className="flex items-center my-2">
                        <div className="w-24 mr-3 flex-grow-0 flex-shrink-0">
                            <Image
                                src="/logo-tibet-vista.png"
                                alt="Tibet Vista Travel Agency"
                                height={100}
                                width={100}
                                className="object-contain w-28 h-16 brightness-75 -hue-rotate-15  cursor-pointer"
                            />
                        </div>
                        <div className="leading-5">
                            <span className="font-semibold">
                                {translate({
                                    ru: "Турагентство Tibet Vista",
                                    en: "Tibet Vista Travel Agency",
                                })}
                            </span>
                            <br />
                            {translate({
                                ru: "Тибет, Лхаса",
                                en: "Tibet, Lhasa",
                            })}
                        </div>
                        {/* (<a href="https://www.tibettour.travel" className='text-sm font-semibold text-blue-500 hover:text-blue-700' target='_blank'>https://www.tibettour.travel</a>) */}
                    </li>
                </ul>

                <div className="mt-7 mb-12">
                    <div className="mx-auto max-w-4xl flex justify-between">
                        <Image
                            src="https://storage.googleapis.com/opentibet/common-2.jpg"
                            alt=""
                            width={375}
                            height={250}
                            quality={75}
                            className="w-[49.5%]"
                            style={{ objectFit: "cover" }}
                        />
                        <Image
                            src="https://storage.googleapis.com/opentibet/alexey-company.jpg"
                            alt=""
                            width={375}
                            height={250}
                            quality={75}
                            className="w-[49.5%]"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

const IconMark = () => {
    return <div className="w-2 h-2 rounded-full bg-yellow-600 mr-2" />;
};
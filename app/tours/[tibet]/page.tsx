"use client"

import { imagesSrc } from "@/components/TibetInfo";
import { AbstractButton, ActionButton, ApplyForm, BackgroundSlider, Footer, LinkTours, Navbar, TimetableDay, TimetablePhoto, TourButton, WithLanguageProvider } from "@/components/components";
import { LINK_APPLY_FORM, LINK_OFFERS, Month, getTourPriceForMonth } from "@/utils/constants";
import { useTranslateFn } from "@/lib/language";

export default function ({ params }: { params: { tibet: string } }) {
    // get month from url
    // get timetable for month
    // render timetable
    // example is tibet-may-2024
    const month = (params.tibet.split('-') ? params.tibet.split('-')[1] : '') as Month | undefined
    const months = ['may', 'june', 'july', 'august', 'september', 'october']
    if (!month || !months.includes(month)) {
        return (
            <main
                lang="ru"
                className="flex min-h-screen flex-col items-center justify-center"
            >
                <h2 className="text-3xl font-semibold text-center max-w-4xl mx-auto mb-10 mt-5">
                    Программа не найдена
                </h2>
            </main>
        )
    }

    const translationsMap: Record<string, string> = {
        'may': 'май',
        'june': 'июнь',
        'july': 'июль',
        'august': 'август',
        'september': 'сентябрь',
        'october': 'октябрь',
    }

    return (
        <WithLanguageProvider>
            <main
                lang="ru"
                className="flex min-h-screen flex-col items-center justify-between"
            >
                <Navbar />
                <div className="w-full h-[70vh] md:h-[70vh]  relative">
                    <BackgroundSlider />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                        }}
                    />
                    <div className="text-white h-full flex flex-col justify-center items-center px-4 md:px-20 py-10 md:py-40 relative z-100">
                        <div className="max-w-5xl w-full">
                            <div className="text-3xl font-semibold text-center w-full px-4 mt-5 mb-5">
                                Программа на {translationsMap[month]} 2025 года
                            </div>
                            <div className="text-xl font-light w-9/12 mx-auto text-center leading-7">
                                Мы знаем и любим Тибет. Мы хотим, чтобы как можно больше людей
                                открывали для себя эту священную землю.
                                <br />
                                <br />
                            </div>
                            <div className="flex max-w-[800px] mx-auto items-baseline flex-wrap justify-around pt-8 mb-12">
                                <AbstractButton label="Оставить заявку" anchor={LINK_APPLY_FORM} />
                                <h2 className="text-2xl font-light mt-3 leading-8">
                                    {getTourPriceForMonth(month)}$ за 15 дней
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-4xl">
                    <div className="bg-white mt-4">
                        <div>
                            <h4 className="font-bold px-3 pt-3 leading-5 text-xl text-black">
                                Пакетный тур OPEN TIBET
                            </h4>
                            <p className="font-semibold mx-3 mb-3 text-blue-500">
                                Всё, что нужно паломнику
                            </p>
                        </div>
                        <TourButton
                            title={`${translationsMap[month].charAt(0).toUpperCase()}${translationsMap[month].slice(1)}`}
                            subtitle={`2—19 ${translationsMap[month]}`}
                            days={14}
                            price={getTourPriceForMonth(month)}
                        />
                    </div>
                    <div className="w-full flex justify-end">
                        <LinkTours />
                    </div>
                </div>
                <div className="pt-10" />
                <div className="max-w-4xl">
                    <TourBasicTimetable />
                    <ApplyForm />
                </div>
                <div className="pt-20" />
                <Footer />
            </main>
        </WithLanguageProvider>
    )
}

const TourBasicTimetable = ({ accentColor = "blue-500" }) => {



    const translate = useTranslateFn()
    return (

        <>
            <TimetableDay accentColor={accentColor} title="1 день">
                {translate({
                    ru: <>
                        Прилетаем в Лхасу, встречаемся с нашим радушным гидом и отправляемся в отель.
                        <br /><br />Дорога занимает примерно час, по пути наслаждаемся прекрасными видами и привыкаем к высокогорью - Лхаса расположена на высоте 3600 м.
                        <br /><br />Ночь в Лхасе
                    </>,
                    en: <>
                        Chengdu-Lhasa Flight. 08:15 – 14:00 Gonkar airport (3550 m). Transfer to Lhasa (3600 m).
                        <br />
                        <br />
                        Overnight in Lhasa.

                    </>
                })}
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="2 день">
                {translate({
                    ru: <>
                        Начинается наше знакомство с городом Богов, красавицей-Лхасой. Мы увидим самые значимые места: Дворца Потала, храма Джокханг и туристического района Баркор.

                        <br /><br />Дворец Потала – Белый дворец – одна из главных «визитных карточек» Лхасы и Тибета, наследие ЮНЕСКО. Это самый высокогорный дворец в мире, и в нем более 1000 помещений. Многие из них это часовни со скульптурами Далай-лам и их тронные и медитационные залы, а также спальные покои, где бережно хранятся предметы личного быта духовных правителей Тибета.

                        <br /><br />После отправляемся в храм Джоканг, самый почитаемы храм в Тибете, и район Баркор, где ждут нас множество сувенирных лавок, кафе, и просто колоритных атмосферных мест

                        <br /><br />Ночь в Лхасе.

                    </>,

                    en: <>

                        Visit to Potala Palace, Jokhang Temple and Barkor tourist area.
                        <br />
                        <br />

                        Lhasa is the capital of the Tibet Autonomous Region, one of the highest cities in the world (about 3500m above sea level), the ancient spiritual and state center of Tibet.As a result of the 1960 administrative reform, Lhasa Urban District was formed as part of the Tibet Autonomous Region, and the historic urban area became Chengguan District. Currently, the population of the county is approx. 2 million people. Almost half of them live directly in the historic city. Lhasa is also the traditional residence of the Dalai Lama. Literally translated from Tibetan, "Lhasa" means "place of the gods".
                        <br />
                        <br />

                        The Potala Palace, the White Palace, is one of the main landmarks of Lhasa and Tibet. It is the largest in area and the highest altitude palace-museum (3700 meters) in the world. It is in the UNESCO World Heritage List. It is built in the eclectic style of Tibetan architecture. Nowadays the temple-palace occupies an area of over 360 thousand m2, and there are more than 1000 rooms in it. Many of them are chapels with sculptures of the Dalai Lamas and their throne and meditation halls, as well as sleeping quarters, where personal household items of the spiritual rulers of Tibet are carefully preserved. The walls of many rooms are decorated with frescoes; numerous sculptures and manuscripts are also on display. The balconies offer beautiful views of Lhasa and the mountains.
                        <br />
                        <br />
                        <TimetablePhoto src={imagesSrc.potala} title="Potala Palace" />

                        Jokhang Monastery is Tibet's most revered temple (Jokhang) and is a UNESCO World Heritage Site. According to legend, it was built by Songtsen Gampo in 647 for his wife, Nepalese Princess Bhrikuti. Inside the 4-storey temple, in numerous chapels, there are now over 3,000 images (sculptures, frescoes) of Buddha, Buddhist deities and Tibetan Buddhist saints. The main object of worship is the statue of Jowo Shakyamuni installed in the main hall of the lower floor, depicting the Buddha at the age of 12.
                        <br />
                        <br />

                        Overnight in Lhasa.

                    </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="3 день">
                {translate({
                    ru: <>

                        Сегодня после завтрака мы отправимся в монастыри Сера и Дрепунг.

                        <br /><br />Наша акклиматизация продолжается, монастыри находятся чуть выше Лхасы, на 4400, и этот день принесет нам не только богатую культурную программу ( и Сера, и Дрепунг входили в тройку государственных великих монастырей), но и даст хороший тренировку телу для адаптации.

                        <br /><br />Ночь в Лхасе
                    </>,
                    en: <>
                        Visiting Sera (4300 m) and Drepung (4400 m) monasteries.
                        <br />
                        <br />

                        Sera (Tib. སེ་ར) is a monastery in the suburbs of Lhasa in Tibet (about 5 km from the city), one of the largest Buddhist monasteries and universities of the Gelug school of Tibetan Buddhism. It is a place of pilgrimage. It was formerly one of the three "state monasteries" of Tibet, along with Drepung and Ganden. Now the monastery still functions; it is the home for more than a hundred monks. The monastery is also a museum that is visited by many tourists. The monks regularly hold vivid philosophical debates.
                        <br />
                        <br />

                        Drepung (Tib. འབྲས་སྤུངས, Waili: 'Bras-spungs, Chinese. 哲蚌 Zhebang, Chinese romanization of Tibetan: Zhaibung; according to the official Tibetan-Russian transcription, Jaebung; in Mongolian pronunciation, Braybun) is a monastery in the suburbs of Lhasa in the Tibet Autonomous Region of China, about 10 km from the city. It is the largest Buddhist monastery and university of the Gelug school of Tibetan Buddhism, and a pilgrimage site. Drepung was formerly one of the state's three "great" monasteries, with sub-monasteries throughout Tibet and beyond. The area of the monastery is 200,000 m².
                        <br />
                        <br />
                        <TimetablePhoto src={imagesSrc.drepung} title="Drepung" />
                        Overnight in Lhasa.
                    </>
                })}

            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="4 день">
                {translate({
                    ru: <>
                        Покидаем Лхасу и начинаем движение к Кайласу. Сегодня мы доедем до одного из самых крупных городов Тибета, Шигадзе, и посетим древний монастырь Ташилунпо.


                        <br /> <br />Этот монастырь один из немногих, переживших Культурную революцию. Побродим по мощеным улочкам обители, услышим древние колокола, сделаем фото "мертвых и вечноживых" деревьев, растущих на площадях. Прикоснемся к обычаям школы Гелуг.

                        <br /> <br />Ночь в Шигадзе.
                    </>,

                    en: <>

                        Transfer from Lhasa (3550 m) to Shigadze (3950 m) /350km 5 hours/. Visiting Tashilunpo monastery.
                        <br />
                        <br />

                        Shigadze, also Shigatze (Tib. གཞིས་ཀ་རྩེ་, Chinese 日喀则, pinyin Rìkāzé, pall. Zhikaze) is a modern large city, the second largest in Tibet, and the capital of a county with a population of 880,000. Most of the population is Chinese; Tibetans live in their own small neighborhood and in the main attraction of Shigadze - Tashilhunpo Monastery, one of the few monasteries that survived the Cultural Revolution. The picturesque ruins of the fortress-dzonga rise above the old quarter. South of the monastery is the summer palace of the Panchen Lama, built in the mid-19th century in the national style.
                        <br />
                        <br />

                        Tashilunpo Monastery is an important center of Gelug school. It was founded in 1447 by Genden Drup, a disciple of Tsongkapa. Later it was Genden Drup who was considered to be the first Dalai Lama. In 1652, the fifth Dalai Lama recognized the right of the monastery’s abbot to be called "Panchen Lama" ("great teacher"). This is the second most important title in Tibet after the Dalai Lama. It was due to this fact that Tashilhunpo (Tashilhunpo) escaped destruction in the 1960s. In its heyday, the monastery, which still occupies an area of more than 70,000 m2, was home to more than 5,000 monks; at present, there are about 700 of them.
                        <br />
                        <br />
                        <TimetablePhoto src={imagesSrc.tashilhunpo} />
                        Overnight in Shigadze.

                    </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="5 день">
                {translate({
                    ru: <>
                        Проводим день в дороге, постепенно приближаясь к священному Кайласу. Сегодня едем мимо Саги, граничащей с Непалом до Парьянга,
                        расположившегося на высоте 4610. Едем долго, 12 часов, наслаждаемся изумительной природой за окнами автобуса.

                        <br /><br />Ночь

                    </>,

                    en: <>

                        Transfer Shigadze - Saga - Pariang (4500 m) /12 hours/
                        <br />
                        <br />

                        Saga city in Shigadze province is the capital of Saga region at an altitude of 4600 m with a population of 20 thousand people. It was founded in 1960. The region has a common border with Nepal about 100 km. The city became famous as a transit point for Nepalese and Indian groups, whose purpose is pilgrimage to Mount Kailas.
                        <br />
                        <br />

                        Paryang is located at an altitude of 4610 meters and translated from Tibetan as «Wide Place». It is the farthest point from Shigadze with the possibility of overnight stay, which can be reached in a day.
                        <br />
                        <br />

                        Overnight.
                    </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="6 день">
                {translate({
                    ru: <>

                        Сегодня мы преодолеем первые перевалы высотой более 5000м. Переезд Парьянг-Дарчен-Пуранг.

                        <br /><br />День принесет нам встречу с Озером Манасаровар - святыней Тибетской земли и всех сведущих паломников. И в первый раз нам покажется величественный Кайлас.

                        <br /><br />В пути посетим два изумительной красоты монастыри - Чиу ("Птичий монастырь") и Госсул.

                        <br /><br />В монастыре Чиу провел последние свои 7 дней жизни великий Падмасамбхава. Это священное и очень почитаемое место.

                        <br /><br />Монастырь Госсул построен чуть правее пещеры, в которой великий Атиш́а проходил семидневную медитацию. Тонкое по своим вибрациям и красоте место.

                        <br /><br />Ночь в Пуранге.
                    </>,
                    en: <>

                        Trek Pariang (4500 m) - Dharchhen (4600 m) - Purang (3700 m).
                        <br />
                        <br />

                        Overcoming the first passes over 5000 meters high, Lake Manasarovar and the first views of the sacred Kailas.
                        <br />
                        <br />

                        Tour of Chiu Monastery («Bird Monastery»). Chiu Gompa was originally built on the oval-shaped mountain Sangduo Baire («Copper Mountain»). The central Seat of Power here is the 8th century cave where Padmasambhava meditated. Here he spent the last seven days of his earthly life. There is a magnificent view of the lakes Rakshas Tal and Manasarovar (4500 m), as well as the snow-capped peak of Kailash, from the top of the monastery.
                        <br />
                        <br />

                        The Gossul Gompa monastery is built just to the right of the cave where the great Atishya experienced his seven-day meditation. From the platform in front of the monastery you can see a stunning panorama of Kailas and the lake. Hindus usually start their Manasarovar Kora from here. Inside the monastery is another cave where St. Gotzampa of the Kagyu school was ordained in the 13th century.
                        <br />
                        <br />
                        <TimetablePhoto src={imagesSrc.chiu} />
                        Overnight in Purang.
                    </>
                })}

            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="7 день">
                {translate({
                    ru: <>

                        Сегодня наш последний день перед выходом на Кору. Переезжаем из Пуранга в Дарчен.

                        <br /><br />По дороге мы остановимся у Озера Ракшас Тал и заедем в монастырь Корчаг, сохранивший у себя освященную статую Бодхисаттвы Манджушри.

                        <br /><br />Нас ждут легенды о древнем озере, ночь предвкушения перед встречей с Кайласом -волнительный и важный день.

                        <br /><br />Ночь в Дарчене.

                    </>,
                    en: <>
                        Visit to Korchag Monastery - return to Darcen - stop at Rakshas Tal Lake on the way.
                        <br />
                        <br />

                        Khorchag Monastery Khorchag Monastery, also called Khorchag Monastery is a Buddhist monastery in Khorchag (pinyin: Korkag) town of Burang county, Ngari prefecture in western Tibet. 12th century Khorchag Monastery. It is very famous sacred place. It was built by the great translator Rinchen Tsangpo. This monastery first belonged to the Kadam lineage and later to the Sakya lineage. There is a statue of Jobo Jampa Dorje (Bodhisattva Manjushri) in the monastery, which was blessed by Rinchen Tsangpo himself.
                        <br />
                        <br />

                        Rakshastal Lake (Langa Tso; Rakshas Tal, Langa Tso). It is located to the left of Manasarovar at an altitude of 4,575 meters. It has a shoreline length of about 125 km and an area of 360 km2. Another name of the lake, Ravana Hrada, is associated with Brahma's great-grandson Ravana, the king of demons (rakshasas). According to one legend, Ravana stood in Rakshastala on one leg for 1000 years, worshipping Shiva, after which he received superpowers (siddhis) from him. According to another, Ravana performed a yagya (fire offering) to Shiva here, with his own head as the sacrifice. Shiva was so impressed by his self-denial that he granted Ravana invulnerability and immortality.
                        <br />
                        <br />
                        <TimetablePhoto src={imagesSrc.rakshastal} />
                        Darchen - The name of the town (Darchen) in this case is translated as "big flag". Once, on the wall of the local monastery, which was destroyed during the Cultural Revolution, a huge thangka with an image of Buddha was hung. After the collapse of the unified Tibetan state in the middle of the IX century, the rulers of western Tibet (Ngari) seized the historical region of Ladakh (Ladakh; today it is part of the Indian state of Jammu and Kashmir) located to the south and founded the Ladakh kingdom. In the 12th century, the Ladakh kings gave the territory (on which Darchhen is located) to the Bhutanese lama Drukchen Ngawang Namgyal. From this time, monasteries on the Kailas-Kora route began to be built.
                        <br />
                        <br />
                        Overnight in Dharchhen.
                    </>
                })}

            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="8 день">
                {translate({
                    ru: <>

                        Кора первый день.
                        <br />
                        <br />
                        Обычно кора начинается с Тарпоче,куда туристов привозит автобус из Дарчена. Это
                        место известно священным кладбищем Драчом Нгагье Дуртрё (кладбище 84 махасиддх).Слева от Тарпоче видна большая белая ступа. Это Чортен Кангньи. Считается, что проход через арку в ступе (чортене) освобождает путника от последствий всех грехов.
                        <br />
                        <br />

                        <TimetablePhoto src={imagesSrc.nandi} title="Кайлас" />

                        Через нескольких километров от Тарпоче показывается мост через Лха Чу. Он ведёт к монастырю Чуку, который принадлежит линии Дрикунг школы Кагью.  Он построен в XIII в. в том месте, где, по легенде, из скалы появилась белая овца. Монастырь Чуку знаменит нерукотворной статуей Будды Амитабхи (Будды Бесконечного Света, по-тибетски — Нангва Тайе).  Статуя  сделана» из белого мрамора и считается важной святыней Кайлас коры.
                        <br />
                        <br />
                        Монастырь Дрира Пхуг (Drira Phug), основан в 1213 г. Мастером Гоцангпа. Принадлежит линии Дрикунг школы Кагью. С ним и окружающими его горами связано огромное количество легенд. После длительной  медитации в пещере, на месте которой построен монастырь, Мастер произнес: «Каждый, кто обопрётся головой в этой пещере, будь то существо в драгоценном человеческом обличье, будь то существо из трёх видов живых существ: птиц, грызунов или насекомых, – каждый избежит перерождения в нижних мирах, даже если он попадёт сюда случайно». Говоря это, он оставил вмятину своей головой в скале.
                        <br />
                        <br />
                        Ночь. (4950м)
                    </>,
                    en: <>

                        Kora - first day.
                        <br />
                        <br />

                        Kora usually starts from Tarpoche, where tourists come by bus from Darcen. This place is famous for the sacred cemetery of Drachom Ngagye Durtryo (cemetery of 84 mahasiddhas).To the left of Tarpoche you can see a big white stupa. This is Chorten Kangnyi. It is believed that passing through the arch in the stupa (chorten) absolves/forgives the traveler all the sins.
                        <br />
                        <br />
                        <TimetablePhoto src={imagesSrc.nandi} />

                        After a few kilometers from Tarpoche, a bridge over the Lha Chu is seen. It leads to Chuku Monastery, which belongs to the Drikung lineage of the Kagyu school. It was built in the 13th century in the place where, according to legend, a white sheep emerged/came from a rock. The Chuku Monastery is famous for the statue of Amitabha Buddha (Buddha of Infinite Light, in Tibetan - Nangwa Taye). The statue is made of white marble and is considered an important shrine of Kailas kora.
                        <br />
                        <br />

                        Drira Phug Monastery (Drira Phug) was founded in 1213. (Master Gottsangpa). It belongs to the Drikung lineage of the Kagyu school. A great number of legends are associated with it and the surrounding mountains. After a long meditation in the cave on the site of which the monastery is built, the Master said: «Everyone who rests his head in this cave, whether he is a being in precious human form, whether he is a creature of the three kinds of living beings: birds, gnawers or insects, everyone will avoid rebirth in the lower worlds, even if he comes here by chance». Saying that, he left a dent with his head in the rock.
                        <br />
                        <br />

                        Overnight (4950 m).


                    </>
                })}

            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="9 день">
                {translate({
                    ru: <>

                        Кора второй день.
                        <br />
                        <br />
                        Это самый трудный день коры. Он является кульминационным днём коры вокруг Кайласа, так как Вы пересечете перевал Дролма-Ла (5600 м), который поразит Вас своей энергетикой. На вершине перевала лежит гигантский кубический камень под названием Пхаванг Мебар.
                        <br />
                        <br />
                        Здесь Вы возрождаетесь, так как все грехи прощаются благодаря состраданию Дролмы, богини Милосердия.
                        При спуске с перевала справа, чуть ниже тропы, виднеется священное озеро Йокмо Цо (также Тукдже Дзингбу, Озеро Сострадания, индийцы называют его Гаури Кунд). Гаури Кунд — одно из самых высокогорных в мире озёр. В индуизме считается, что озеро создал Шива по просьбе своей супруги Парвати.
                        Далее Вас ждет шестичасовой переход к монастырю Зутур пхук (4750 м).
                        <br />
                        <br />
                        Монастырь Зутрул Пхук (в переводе означает ‘Пещера чудес’) выстроен вокруг пещеры, которая стала
                        местом знаменитой победы Миларепы над мастером бона Наро Бончунгом.
                        Ночь у монастыря Зутур Пхук. (4700м)
                    </>,
                    en: <>
                        Kora - day two.
                        <br />
                        <br />


                        This is the most challenging day of the kora. It is the climax day of the kora around Kailas as you will cross the Drolma La pass (5600m), which will amaze you with its energy. At the top of the pass lies a giant cubic stone called Phawang Mebar.
                        <br />
                        <br />

                        Here you come through rebirth as all sins are forgiven through the compassion of Drolma, the Goddess of Mercy. As you descend from the pass, the sacred lake Yokmo Tso (also Tukje Jingbu, Lake of Compassion, the Indians call it Gauri Kund) can be seen on the right, just below the trail. Gauri Kund is one of the highest altitude lakes in the world. In Hinduism, it is believed that the lake was created by Shiva at the request of his consort Parvati. Next, a six-hour trek to Zutrul Phuk Monastery (4,750 meters) awaits you.
                        <br />
                        <br />

                        Zutrul Phuk Monastery (meaning 'Cave of Wonders') is built around the cave that was the site of Milarepa's famous victory over the Bon master Naro Bonchung. Overnight at Zutur Phuk Monastery(4700 м).

                    </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="10 день">
                {translate({
                    ru: <>

                        Завершающий день коры – «финишная прямая» дорога идёт на спуск, возвращение в Дарчен,
                        Посещение Гьяндрак и Серлунг на джипах. Опционно.
                        <br />
                        <br />
                        Обитель Гьянгдрак Гомпа (Gyangdrak Gompa) на холме в долине Гьянгдрак-чу производит фантастическое впечатление. Приблизительный перевод названия – «предел слышимости». По преданиям, долина названа так потому, что находящиеся в ней могут вбирать в себя звуки окрестных священных мест.
                        Монастырь (появился здесь в 1215 г)., и вот уже 800 лет принадлежит традиции Дрикунг школы Кагью.
                        <br />
                        <br />
                        Серлунг Гомпа – самая маленькая из пяти обителей вокруг Кайласа; её строения расположены в виде прямоугольника. После полной реконструкции 2012 г. во внутреннем дворе справа – главный храм со статуей Падмасамбхавы. Рядом с монастырём находится большая белая ступа Джангчуб; такая же украшает противоположный берег одноимённой реки. В Серлунг Гомпа всего два монаха.
                        <br />
                        <br />
                        Ночь в Дарчене.
                    </>,

                    en: <>

                        Final day of kora - "finish line". The road goes downhill. Return to Darchhen, Visiting Gyandrak and Serlung by jeep. Optional.
                        <br />
                        <br />

                        Gyangdrak Gompa abode on a hill in the Gyangdrak-chu valley makes a fantastic impression. Straight translation of the name is "the limit of hearing”/ “earshot". According to legends, the valley is named that way because those in it can absorb the sounds of the surrounding sacred places. The monastery (appeared here in 1215), and for 800 years belongs to the tradition of Drikung Kagyu school.
                        <br />
                        <br />

                        Serlung Gompa is the smallest of the five monasteries around Kailas; its buildings are arranged in a rectangular shape. After a complete renovation in 2012, the main temple with a statue of Padmasambhava is in the courtyard on the right. Next to the monastery is a large white Jangchub stupa; a similar one adorns the opposite bank of the river of the same name. There are only two monks at Serlung Gompa.
                        <br />
                        <br />

                        Overnight in Darchen.

                    </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="11 день">
                {translate({
                    ru: <>

                        Получившие свой духовный опыт, наполненные впечатлениями и осознаниями, мы начинаем путь домой.

                        <br /><br />Переезд Дарчен – Ладзе.

                        <br /><br />Обычно из Ладзе туристы направляются на юг, к непальской границе и базовому лагерю Эвереста. За последние несколько лет город стало не узнать. Из маленького провинциального городка он превратился в современный китайский город. Увидим сами)

                    </>,

                    en: <>
                        Transfer Darchen - Ladze /about 14 hours/.
                        <br />
                        <br />

                        Usually from Ladze tourists head south to the Nepalese border and Everest base camp. Over the past few years, the town has become unrecognizable. It has changed from a small provincial town into a modern Chinese city. Three riverbeds run near Lhadze. The nearest highest peak is Mount Yakri, 5656 meters north of Lhadze.
                        <br />
                        <br />

                        The only landmark is the Changmoche Monastery in the west of the city. It belongs to the followers of the "red-robed" tradition of the Kagya school.

                    </>
                })}
            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="12 день">
                {translate({
                    ru: <>

                        Дорога возвращает нас в Лхасу.

                        <br /><br />Переезд Ладзе – Гияндзе – Лхасса

                        <br /><br />Заезжаем по пути в монастырь Пелкхор Чеде и к Озеру Ямдрок.

                        <br /><br />В монастыре увидим знаменитую ступу Кумбум со 108 внутренними залами и алтарями на четырёх этажах.

                        <br /><br />Озеро Ямдрок- "бирюзовое озеро Тибета", по форме напоминающее осьминога. На одном из 9 островов воздвигнут монастырь, главной реликвией которого является камень со следом ноги Падмасамбхавы. легенды не отпускают нас, сопровождая до самого возвращения в столицу.
                        <br /><br />Ночь в Лхасе
                    </>,
                    en: <>
                        Travel Lhasa - Gyantse - Lhasa
                        <br />
                        <br />


                        Visit to Pelkhor Chede Monastery and Yamdrok Gyantse Lake - Gyantse was once the third most important and populous city in Tibet (after Lhasa and Shigadze). It is located 250 km southwest of Lhasa at an altitude of 3977 meters, population - more than 50 thousand people. The old city is located in a valley formed by low mountains, on one of which (with steep slopes) in the IX century fortress dzong was erected, and at the foot of the other, more gentle, in the XIV-XV centuries a monastery Palcho (Pelkhor Chode) was raised as well.
                        <br />
                        <br />


                        Pelkhor Chode Monastery (abbreviated Pelcho or Palcho) is a large Buddhist monastery in Gyangdze township in Tibet. It houses the famous Kumbum Stupa with 108 inner halls and altars on four floors. It has preserved numerous Buddhist sculptures in Nepali style. The architecture and paintings of the Kumbum stupa follow the symbolism of the Sakya school, particularly the Drubtat Kantu, a collection of tantras of this school. The monastery was founded in 1418 by the first Panchen Reldrup. The whole Pelkor-Cheude complex included 15 monasteries of different schools, mainly Gelug, Kadam and Sakya. The monks of these three schools share a common hall for debates and meetings and rooms for the study of Buddhism.
                        <br />
                        <br />
                        <TimetablePhoto src={imagesSrc.pelkhor} maxHeight={400} />

                        Yamdrok Lake is one of the sacred lakes in Tibet. Located at an altitude of 4,408 meters, the name Yamdrok means "turquoise lake of Tibet". Yamdrok-(Yum)tso resembles an octopus in shape; its head is the northern part of the lake. A monastery has been erected on one of the 9 islands, the main relic of which is a stone with the footprint of Padmasambhava's feet.

                        Overnight in Lhasa.

                    </>
                })}

            </TimetableDay>

            <TimetableDay accentColor={accentColor} title="13 день">
                {translate({
                    ru: <>

                        Свободное время в Лхасе. Высыпаемся, гуляем, покупаем сувениры. Хорошо попробовать и купить китайский и тибетский чай, поющие чаши, изделия из меха и недорогую аутентичную бижутерию.
                        <br />
                        <br />
                        Ночь в Лхасе
                    </>,
                    en: <>
                        Free day in Lhasa.
                        <br />

                        Overnight in Lhasa
                    </>
                })}
            </TimetableDay>


            <TimetableDay accentColor={accentColor} title="14 день">
                {translate({
                    ru: <>
                        Наше путешествие закончилось, с легким сердцем и самыми прекрасными воспоминаниями вылетаем домой.
                        <br />
                        <br />Авиаперелет в Ченду.

                    </>,
                    en: <>
                        Return flight to Chengdu.
                    </>
                })}

            </TimetableDay>
        </>

    );
};

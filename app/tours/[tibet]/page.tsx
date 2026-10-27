import TourMonthPage from "./TourMonthPage";

// при статической сборке (output: 'export') генерируются только эти страницы,
// например /tours/tibet-may-2025
const MONTHS = ['may', 'june', 'july', 'august', 'september', 'october']
const YEAR = 2025

export const dynamicParams = false

export function generateStaticParams() {
    return MONTHS.map(month => ({ tibet: `tibet-${month}-${YEAR}` }))
}

export default function ({ params }: { params: { tibet: string } }) {
    return <TourMonthPage params={params} />
}

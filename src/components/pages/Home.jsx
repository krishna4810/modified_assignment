import './home.css'
import FeaturedInfo from '../../components/featured/FeaturedInfo'
import Topbar from '../../components/topbar/Topbar'
import Chart from '../../components/chart/Chart'

export default function Home() {
    return (
        <div className="home">
            <Topbar />
            <FeaturedInfo />
            <Chart />
        </div>
    )
}

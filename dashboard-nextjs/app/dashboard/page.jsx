import Card from "../_components/card"
import Chart from "../_components/chart"
import RightBar from "../_components/rightbar"
import Transactions from "../_components/transactions"

const Dashboard = () => {
    return (
        <div className="flex gap-5">
            <main className="flex-[3] flex flex-col gap-5">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transactions/>
                <Chart/>
            </main>
            <aside className="flex-1">
                <RightBar/>
            </aside>
        </div>
    )
}

export default Dashboard
import BarChart from "./components/Barchart";


const Home = () =>{
    return <div><BarChart title={'title1'} data={['vue', 'angular', 'react']}/><BarChart title={'title2'} data={['vue', 'angular', 'react']}/></div>
}

export default Home;
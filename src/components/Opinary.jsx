import img from '../assets/for-brands.svg'

function Opinary (){
    return (
        <div>
            <div className='survey-wrap'>
            <div className='container'>
            <div className="row">
            <div className='col-md-12'>
            <div className="col-md-6">
            <img src={img} alt="img" />
            </div>
            <div className='col-md-6'>
                <div className='label'>OPINARY FOR BRANDS</div>
                <h3>Advertising that doesn’t
                feel like advertising​</h3>
                <p className='desc'>Our instantly recognisable voting tools help global brands reach over 125 million users by simply asking the right questions within our premium publisher network.</p>
                <div>                
                <button className='btn'>Learn More</button>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Opinary
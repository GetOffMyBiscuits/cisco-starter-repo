import './Exhibit.css'

export default function Exhibit(props){
    return <div className='exhibit'>
                <h2>Card Wrapper</h2>
                <div className='cards'>{props.children}</div>
            </div>
}
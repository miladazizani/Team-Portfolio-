import { Button } from "antd"
import ImageCard from "../components/ImageCard"

const Team = () => {
    return (
        <main className="h-260 flex flex-col items-center p-4">
            <section className="h-4/12">
                <div className="h-4/12 w-130 flex flex-col justify-center items-center gap-5 mt-25">
                    <h1 className="text-4xl font-bold">The Minds Behind the Code</h1>
                    <p className="text-xl font-light opacity-65 text-center ">We design, we code, and we turn ideas into smooth user experience.</p>
                </div>
            </section>
            <section className="h-8/12 w-full grid grid-cols-4 gap-6">

                <ImageCard name={'Mild Azizani'} job={'MA/AI Learning'} src={'./images/milad.jpg'}/>
                <ImageCard name={'Amin Rasooli'} job={'Designer and Mobile Developer'} src={'/images/amin.jpg'} />
                <ImageCard name={'Mojib Movahed'} job={'Technical Artist and Marketer'} src={'/images/mojib.jpg'}/>
                <ImageCard name={'Nawid Talaye'} job={'DevOps and Tester'} src={'/images/mojib.jpg'}/>
        

            </section>
        </main>
    )
}
export default Team
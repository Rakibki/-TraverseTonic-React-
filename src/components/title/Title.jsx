
const Title = ({subTitle, title, desc}) => {
  return (
    <div className="w-[50%] mx-auto">
        <h1 className="text-2xl font-semibold text-center">{subTitle}</h1>
        <h1 className="text-6xl font-bold text-center">{title}</h1>
        <h1 className="text-lg text-center">{desc}</h1>
    </div>
  )
}

export default Title
import profile from "../../assets/images/profile.png"
export default function Header() {
  return (
    <div className="flex items-center justify-between p-5 mx-5 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
    </div>
  )
}

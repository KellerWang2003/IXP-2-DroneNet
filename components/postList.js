import Post from "./post"

export default function PostList() {
  let postList = [
    {
      profile: "/images/profile.jpg",
      name: "Jay",
      content: "/images/test.png",
      text: "This spot is awesome!!!"
    },
    {
      profile: "/images/profile.jpg",
      name: "Hallo",
      content: "/images/test.png",
      text: "Hallo!!! My name is Hallo!"
    },
    {
      profile: "/images/profile.jpg",
      name: "Hallo",
      content: "/images/test.png",
      text: "Hallo!!! My name is Hallo!"
    },
    {
      profile: "/images/profile.jpg",
      name: "Hallo",
      content: "/images/test.png",
      text: "Hallo!!! My name is Hallo!"
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {postList && postList.map( post =>
        <Post {...post}/>
      )}
    </div>
  )
}
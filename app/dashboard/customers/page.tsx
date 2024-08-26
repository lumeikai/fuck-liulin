"use client";

export default function Page() {
  const handleClick = async () => {
    const response = await fetch("/api/getData");
    const res = await response.json();
    console.log("🚀 ~ handleClick ~ res:", res);
  };

  const handlePost = async () => {
    const response = await fetch("/api/getData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { name: "sss", age: 18, id: 6 },
        { name: "teeeest", age: 20, id: 7 },
      ]),
    });
    const res = await response.json();
    console.log(res);
  };
  return (
    <div>
      <div onClick={handleClick}>123</div>
      <div onClick={handlePost}>test</div>
    </div>
  );
}

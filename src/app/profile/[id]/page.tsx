"use client";

export default function page({ params }: any) {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Error404() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link href="/">Go Home</Link>
    </div>
  );
}

export default function ClickEffect(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  div
) {
  const x = event.clientX - event.currentTarget.offsetLeft;
  const y = event.clientY - event.currentTarget.offsetTop;

  div.style.position = "relative";
  div.style.overflow = "hidden";
  const effectDiv = document.createElement("div");
  effectDiv.className = "ClickEffect";
  div.appendChild(effectDiv);
  effectDiv.style.transform = `translateX(-50%) translateY(-50%)`;
  effectDiv.style.left = `${x}px`;
  effectDiv.style.top = `${y}px`;
  setTimeout(() => {
    effectDiv.remove();
  }, 700);
}

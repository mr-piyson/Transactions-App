import * as React from "react";

function Avatar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={62}
      height={62}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#prefix__pattern0)" d="M0 0h62v62H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0_104_49" transform="scale(.00195)" />
        </pattern>
        <image
          id="prefix__image0_104_49"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default Avatar;

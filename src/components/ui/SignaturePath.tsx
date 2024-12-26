import React from "react";

type SignaturePathProps = React.SVGProps<SVGSVGElement> & {
  style?: React.CSSProperties;
  className?: string;
};

export const SignaturePath: React.FC<SignaturePathProps> = ({
  style,
  className = "",
  ...props
}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    id="canvas" 
    viewBox="219.774 296.447 950.912 104.246"
    style={style}
    className={`${className}`}
    {...props}
    >
    <path d="M 249.91,308.74 C 249.30 309.45, 248.93 310.40, 248.09 312.58 C 247.25 314.77, 246.85 316.23, 245.71 319.67 C 244.57 323.12, 243.90 325.45, 242.39 329.82 C 240.89 334.18, 239.93 336.70, 238.17 341.50 C 236.41 346.31, 235.35 348.96, 233.59 353.84 C 231.83 358.73, 230.90 361.32, 229.38 365.92 C 227.86 370.51, 227.14 372.83, 226.00 376.81 C 224.85 380.80, 224.30 382.70, 223.66 385.83 C 223.02 388.96, 222.94 390.41, 222.82 392.46 C 222.70 394.51, 222.83 395.05, 223.06 396.07 C 223.30 397.09, 223.64 397.28, 224.00 397.57 C 224.35 397.85, 224.67 397.58, 224.83 397.48 C 224.98 397.39, 224.79 397.14, 224.76 397.07 C 224.73 397.00, 224.65 397.34, 224.68 397.12 C 224.70 396.90, 224.75 396.85, 224.87 395.96 C 225.00 395.08, 225.04 394.63, 225.30 392.70 C 225.57 390.77, 225.65 389.38, 226.20 386.31 C 226.74 383.24, 227.04 381.32, 228.03 377.36 C 229.03 373.40, 229.73 371.08, 231.19 366.50 C 232.65 361.93, 233.56 359.33, 235.33 354.47 C 237.10 349.61, 238.17 346.97, 240.02 342.20 C 241.87 337.43, 242.90 334.94, 244.58 330.62 C 246.26 326.30, 247.17 324.05, 248.41 320.61 C 249.65 317.16, 250.24 315.72, 250.78 313.41 C 251.32 311.10, 251.31 310.00, 251.13 309.07 C 250.96 308.14, 250.52 308.04, 249.91 308.74" 
    style={{ ...style }}
/>
    <path d="M 252.10,307.19 C 251.89 307.49, 251.92 307.47, 251.90 308.18 C 251.87 308.88, 251.77 309.29, 251.99 310.70 C 252.21 312.10, 252.47 313.17, 252.99 315.21 C 253.52 317.24, 253.88 318.54, 254.62 320.86 C 255.35 323.19, 255.70 324.54, 256.66 326.83 C 257.61 329.12, 258.09 330.33, 259.39 332.32 C 260.69 334.30, 261.38 335.27, 263.15 336.76 C 264.93 338.24, 265.94 338.93, 268.26 339.73 C 270.58 340.54, 271.93 340.83, 274.73 340.78 C 277.53 340.73, 279.09 340.41, 282.27 339.48 C 285.45 338.54, 287.17 337.80, 290.63 336.10 C 294.08 334.39, 295.95 333.28, 299.54 330.94 C 303.13 328.61, 305.07 327.15, 308.56 324.44 C 312.06 321.72, 313.89 320.11, 317.01 317.36 C 320.13 314.62, 321.69 313.11, 324.18 310.71 C 326.67 308.31, 327.92 307.17, 329.46 305.37 C 331.00 303.57, 331.49 302.69, 331.89 301.71 C 332.29 300.73, 332.07 300.31, 331.47 300.47 C 330.87 300.63, 330.12 300.93, 328.90 302.51 C 327.68 304.10, 327.00 305.42, 325.38 308.39 C 323.76 311.37, 322.90 313.42, 320.81 317.40 C 318.71 321.37, 317.37 323.74, 314.89 328.28 C 312.42 332.81, 310.98 335.36, 308.44 340.07 C 305.90 344.78, 304.52 347.30, 302.21 351.82 C 299.90 356.34, 298.73 358.65, 296.91 362.66 C 295.09 366.68, 294.23 368.58, 293.11 371.88 C 291.99 375.18, 291.54 376.67, 291.30 379.18 C 291.06 381.69, 291.24 382.76, 291.91 384.43 C 292.58 386.09, 293.40 386.69, 294.65 387.49 C 295.89 388.29, 296.91 388.43, 298.11 388.44 C 299.31 388.44, 300.16 387.95, 300.63 387.50 C 301.10 387.06, 300.93 386.54, 300.46 386.22 C 299.99 385.91, 299.21 386.08, 298.29 385.93 C 297.37 385.78, 296.73 385.91, 295.85 385.46 C 294.98 385.01, 294.33 384.87, 293.93 383.67 C 293.53 382.47, 293.54 381.67, 293.83 379.46 C 294.12 377.25, 294.38 375.81, 295.37 372.61 C 296.35 369.41, 297.05 367.46, 298.75 363.47 C 300.44 359.48, 301.59 357.15, 303.85 352.65 C 306.11 348.14, 307.49 345.62, 310.05 340.94 C 312.61 336.26, 314.06 333.72, 316.64 329.25 C 319.21 324.79, 320.60 322.44, 322.93 318.60 C 325.26 314.77, 326.57 312.97, 328.31 310.07 C 330.05 307.17, 330.85 305.95, 331.63 304.10 C 332.41 302.26, 332.41 301.53, 332.23 300.84 C 332.04 300.14, 331.68 300.11, 330.71 300.63 C 329.74 301.15, 329.05 301.79, 327.38 303.44 C 325.71 305.09, 324.74 306.44, 322.37 308.89 C 319.99 311.33, 318.53 312.91, 315.50 315.67 C 312.46 318.43, 310.65 320.03, 307.21 322.69 C 303.77 325.35, 301.83 326.77, 298.29 328.99 C 294.75 331.20, 292.88 332.23, 289.52 333.76 C 286.16 335.28, 284.45 335.84, 281.48 336.61 C 278.50 337.37, 277.12 337.52, 274.66 337.58 C 272.21 337.63, 271.13 337.50, 269.21 336.89 C 267.29 336.28, 266.49 335.76, 265.05 334.52 C 263.61 333.28, 263.07 332.46, 262.03 330.68 C 260.99 328.90, 260.61 327.78, 259.86 325.61 C 259.11 323.44, 258.86 322.11, 258.29 319.83 C 257.72 317.54, 257.53 316.21, 257.02 314.18 C 256.50 312.14, 256.28 311.03, 255.71 309.65 C 255.14 308.26, 254.72 307.85, 254.17 307.25 C 253.62 306.65, 253.37 306.66, 252.95 306.64 C 252.54 306.63, 252.31 306.88, 252.10 307.19" 
    style={{ ...style }}     
    />
    <path d="M 365.89,352.20 C 365.90 351.61, 365.64 351.00, 364.97 350.24 C 364.29 349.48, 363.78 348.97, 362.51 348.38 C 361.25 347.80, 360.39 347.45, 358.65 347.32 C 356.90 347.18, 355.94 347.24, 353.78 347.71 C 351.62 348.18, 350.36 348.51, 347.86 349.68 C 345.35 350.85, 343.93 351.70, 341.24 353.56 C 338.55 355.42, 337.04 356.63, 334.42 358.98 C 331.80 361.33, 330.38 362.76, 328.13 365.29 C 325.89 367.82, 324.69 369.15, 323.21 371.62 C 321.72 374.09, 321.19 375.42, 320.70 377.64 C 320.22 379.86, 320.25 380.98, 320.78 382.73 C 321.31 384.49, 321.89 385.31, 323.36 386.40 C 324.84 387.50, 325.93 387.93, 328.14 388.22 C 330.36 388.52, 331.76 388.46, 334.44 387.88 C 337.13 387.29, 338.63 386.66, 341.56 385.28 C 344.48 383.91, 346.09 382.97, 349.07 381.02 C 352.04 379.08, 353.60 377.87, 356.41 375.56 C 359.21 373.26, 360.64 371.88, 363.08 369.50 C 365.52 367.11, 366.87 365.85, 368.60 363.62 C 370.33 361.40, 371.11 359.98, 371.74 358.37 C 372.38 356.76, 372.25 355.98, 371.76 355.57 C 371.27 355.17, 370.51 355.37, 369.29 356.35 C 368.07 357.33, 367.08 358.39, 365.65 360.47 C 364.23 362.55, 363.40 364.19, 362.17 366.75 C 360.94 369.31, 360.32 370.84, 359.50 373.27 C 358.67 375.70, 358.28 376.92, 358.04 378.90 C 357.79 380.88, 357.95 381.81, 358.28 383.18 C 358.61 384.54, 359.22 385.28, 359.71 385.72 C 360.19 386.17, 360.56 385.95, 360.71 385.39 C 360.85 384.83, 360.41 384.11, 360.44 382.92 C 360.47 381.73, 360.40 381.11, 360.85 379.44 C 361.30 377.76, 361.70 376.70, 362.70 374.55 C 363.70 372.39, 364.56 371.04, 365.87 368.65 C 367.18 366.27, 368.16 364.78, 369.26 362.62 C 370.37 360.46, 370.92 359.22, 371.38 357.84 C 371.84 356.46, 371.89 355.85, 371.54 355.70 C 371.20 355.55, 370.78 355.91, 369.68 357.09 C 368.58 358.27, 367.78 359.51, 366.07 361.60 C 364.35 363.68, 363.37 365.16, 361.09 367.53 C 358.82 369.91, 357.40 371.26, 354.69 373.48 C 351.98 375.69, 350.43 376.84, 347.54 378.62 C 344.65 380.39, 343.02 381.19, 340.25 382.35 C 337.48 383.52, 336.05 383.91, 333.67 384.45 C 331.30 385.00, 330.18 385.12, 328.39 385.10 C 326.61 385.07, 325.83 384.92, 324.75 384.32 C 323.68 383.72, 323.31 383.31, 323.02 382.11 C 322.73 380.91, 322.73 380.10, 323.30 378.32 C 323.87 376.55, 324.44 375.47, 325.85 373.25 C 327.25 371.03, 328.22 369.62, 330.32 367.21 C 332.42 364.79, 333.81 363.37, 336.35 361.17 C 338.89 358.98, 340.41 357.88, 343.01 356.23 C 345.61 354.58, 347.04 353.96, 349.34 352.93 C 351.65 351.89, 352.74 351.50, 354.55 351.05 C 356.37 350.60, 357.08 350.59, 358.40 350.68 C 359.72 350.77, 360.21 351.13, 361.16 351.50 C 362.12 351.88, 362.42 352.22, 363.18 352.56 C 363.93 352.90, 364.37 353.27, 364.92 353.20 C 365.46 353.13, 365.88 352.79, 365.89 352.20"
    style={{ ...style }}
    />
    <path d="M 398.96,359.47 C 398.38 359.75, 398.04 360.26, 397.26 361.37 C 396.49 362.48, 396.03 363.28, 395.07 365.04 C 394.12 366.80, 393.51 368.06, 392.49 370.17 C 391.48 372.28, 390.92 373.58, 390.00 375.57 C 389.08 377.56, 388.48 378.63, 387.90 380.11 C 387.32 381.60, 387.10 382.28, 387.10 382.99 C 387.11 383.69, 387.38 383.92, 387.92 383.63 C 388.46 383.34, 388.94 382.87, 389.80 381.52 C 390.66 380.17, 391.13 379.03, 392.21 376.89 C 393.29 374.76, 393.78 373.26, 395.21 370.83 C 396.64 368.39, 397.49 366.98, 399.34 364.71 C 401.18 362.44, 402.31 361.33, 404.44 359.47 C 406.56 357.62, 407.79 356.79, 409.98 355.42 C 412.17 354.05, 413.33 353.48, 415.39 352.64 C 417.45 351.80, 418.47 351.55, 420.29 351.22 C 422.11 350.89, 422.93 350.90, 424.49 350.99 C 426.06 351.07, 426.81 351.32, 428.12 351.64 C 429.42 351.97, 430.05 352.29, 431.01 352.60 C 431.97 352.90, 432.25 353.00, 432.92 353.15 C 433.59 353.31, 433.98 353.51, 434.37 353.38 C 434.76 353.25, 434.97 352.93, 434.88 352.52 C 434.78 352.11, 434.46 351.82, 433.90 351.32 C 433.34 350.82, 433.09 350.53, 432.08 350.01 C 431.07 349.50, 430.34 349.12, 428.85 348.75 C 427.36 348.37, 426.44 348.19, 424.63 348.12 C 422.82 348.04, 421.86 348.04, 419.80 348.38 C 417.73 348.73, 416.58 348.96, 414.28 349.83 C 411.99 350.70, 410.70 351.28, 408.32 352.74 C 405.94 354.19, 404.67 355.12, 402.38 357.10 C 400.09 359.08, 398.93 360.28, 396.87 362.63 C 394.81 364.98, 393.79 366.37, 392.09 368.85 C 390.40 371.32, 389.51 372.73, 388.40 375.00 C 387.29 377.28, 386.88 378.54, 386.54 380.22 C 386.19 381.91, 386.33 382.68, 386.68 383.41 C 387.04 384.15, 387.53 384.26, 388.33 383.91 C 389.12 383.55, 389.69 382.99, 390.68 381.66 C 391.67 380.32, 392.18 379.18, 393.26 377.23 C 394.34 375.28, 395.02 374.04, 396.07 371.93 C 397.13 369.82, 397.79 368.55, 398.55 366.68 C 399.31 364.80, 399.57 363.88, 399.89 362.54 C 400.21 361.20, 400.32 360.59, 400.13 359.97 C 399.94 359.36, 399.53 359.19, 398.96 359.47" 
    style={{ ...style }}
    />
    <path d="M 484.15,352.00 C 483.88 351.46, 483.42 350.99, 482.32 350.53 C 481.22 350.07, 480.46 349.79, 478.66 349.71 C 476.86 349.63, 475.68 349.60, 473.33 350.13 C 470.99 350.67, 469.63 351.16, 466.94 352.39 C 464.25 353.62, 462.74 354.49, 459.89 356.27 C 457.03 358.04, 455.39 359.13, 452.67 361.26 C 449.94 363.39, 448.44 364.64, 446.27 366.94 C 444.10 369.24, 443.07 370.50, 441.84 372.75 C 440.61 375.00, 440.19 376.17, 440.13 378.20 C 440.06 380.23, 440.35 381.28, 441.50 382.90 C 442.65 384.51, 443.60 385.29, 445.87 386.27 C 448.14 387.26, 449.66 387.57, 452.84 387.83 C 456.02 388.09, 457.92 387.92, 461.75 387.58 C 465.58 387.25, 467.79 386.89, 471.98 386.14 C 476.18 385.38, 478.59 384.87, 482.75 383.81 C 486.91 382.75, 489.06 382.09, 492.79 380.85 C 496.52 379.61, 498.35 378.94, 501.41 377.60 C 504.47 376.26, 506.04 375.43, 508.09 374.16 C 510.14 372.90, 510.68 372.25, 511.67 371.26 C 512.67 370.28, 512.90 369.75, 513.07 369.23 C 513.24 368.71, 513.04 368.55, 512.54 368.66 C 512.04 368.77, 511.74 369.16, 510.57 369.77 C 509.41 370.39, 508.75 370.64, 506.69 371.72 C 504.64 372.81, 503.25 373.80, 500.32 375.19 C 497.38 376.57, 495.66 377.36, 492.03 378.64 C 488.41 379.93, 486.28 380.58, 482.19 381.61 C 478.10 382.64, 475.71 383.13, 471.59 383.79 C 467.46 384.44, 465.26 384.72, 461.57 384.88 C 457.88 385.04, 456.06 384.89, 453.14 384.59 C 450.22 384.30, 448.92 384.04, 446.97 383.40 C 445.03 382.77, 444.29 382.42, 443.39 381.42 C 442.50 380.41, 442.31 379.82, 442.50 378.38 C 442.68 376.94, 443.14 376.09, 444.33 374.22 C 445.53 372.35, 446.45 371.16, 448.47 369.03 C 450.50 366.90, 451.87 365.59, 454.47 363.57 C 457.07 361.55, 458.69 360.51, 461.47 358.93 C 464.25 357.35, 465.83 356.72, 468.37 355.68 C 470.90 354.63, 472.10 354.20, 474.16 353.70 C 476.22 353.21, 477.16 353.32, 478.67 353.23 C 480.19 353.13, 480.73 353.25, 481.73 353.24 C 482.73 353.24, 483.20 353.47, 483.69 353.22 C 484.17 352.97, 484.42 352.53, 484.15 352.00"
    style={{ ...style }}
    />
    <path d="M 514.99,368.74 C 515.54 369.00, 516.10 369.03, 517.35 368.87 C 518.60 368.71, 519.44 368.51, 521.24 367.93 C 523.05 367.36, 524.23 366.92, 526.38 366.01 C 528.53 365.10, 529.81 364.50, 531.99 363.39 C 534.17 362.28, 535.36 361.65, 537.29 360.46 C 539.21 359.27, 540.21 358.67, 541.61 357.44 C 543.00 356.21, 543.66 355.57, 544.27 354.32 C 544.88 353.06, 545.02 352.32, 544.67 351.17 C 544.32 350.01, 543.86 349.31, 542.51 348.54 C 541.16 347.78, 540.17 347.40, 537.91 347.35 C 535.64 347.29, 534.11 347.43, 531.17 348.28 C 528.23 349.13, 526.45 349.96, 523.21 351.59 C 519.96 353.22, 518.10 354.31, 514.94 356.44 C 511.79 358.57, 510.06 359.86, 507.42 362.25 C 504.79 364.64, 503.45 365.93, 501.77 368.39 C 500.09 370.85, 499.53 372.20, 499.04 374.55 C 498.55 376.90, 498.60 378.10, 499.33 380.13 C 500.05 382.17, 500.80 383.18, 502.67 384.73 C 504.54 386.29, 505.83 387.05, 508.69 387.90 C 511.56 388.75, 513.36 388.86, 516.98 389.00 C 520.59 389.13, 522.69 388.99, 526.78 388.58 C 530.87 388.17, 533.49 387.72, 537.41 386.97 C 541.33 386.21, 543.45 385.75, 546.39 384.82 C 549.34 383.89, 551.06 383.05, 552.15 382.33 C 553.23 381.62, 553.09 381.23, 551.81 381.24 C 550.53 381.25, 548.73 381.75, 545.75 382.39 C 542.77 383.03, 540.77 383.72, 536.93 384.44 C 533.09 385.17, 530.50 385.68, 526.54 386.03 C 522.58 386.37, 520.52 386.43, 517.14 386.17 C 513.76 385.90, 512.18 385.46, 509.64 384.71 C 507.09 383.97, 506.01 383.53, 504.41 382.44 C 502.81 381.35, 502.20 380.73, 501.63 379.28 C 501.06 377.82, 501.03 376.99, 501.55 375.15 C 502.06 373.31, 502.66 372.26, 504.20 370.08 C 505.74 367.90, 506.81 366.53, 509.26 364.25 C 511.71 361.97, 513.40 360.68, 516.44 358.69 C 519.49 356.70, 521.34 355.66, 524.48 354.29 C 527.62 352.91, 529.43 352.49, 532.13 351.80 C 534.83 351.12, 536.12 351.02, 537.99 350.86 C 539.87 350.71, 540.54 350.84, 541.52 351.01 C 542.49 351.19, 542.74 351.34, 542.89 351.74 C 543.05 352.15, 542.91 352.37, 542.29 353.04 C 541.66 353.70, 541.09 354.16, 539.76 355.06 C 538.42 355.97, 537.47 356.55, 535.61 357.56 C 533.74 358.57, 532.56 359.15, 530.42 360.12 C 528.27 361.08, 526.98 361.55, 524.88 362.40 C 522.78 363.26, 521.59 363.65, 519.90 364.40 C 518.21 365.16, 517.48 365.55, 516.43 366.17 C 515.38 366.80, 514.92 367.02, 514.64 367.53 C 514.35 368.04, 514.45 368.47, 514.99 368.74" 
    style={{ ...style }}
    />
    <path d="M 602.44,313.31 C 601.84 313.64, 601.51 314.10, 600.52 315.48 C 599.53 316.86, 598.86 317.70, 597.48 320.20 C 596.09 322.70, 595.38 324.53, 593.59 327.97 C 591.80 331.41, 590.68 333.51, 588.52 337.39 C 586.37 341.27, 585.06 343.46, 582.80 347.39 C 580.54 351.32, 579.27 353.39, 577.22 357.05 C 575.17 360.71, 574.14 362.54, 572.56 365.67 C 570.99 368.81, 570.20 370.24, 569.34 372.74 C 568.48 375.23, 568.27 376.47, 568.28 378.16 C 568.29 379.84, 568.74 380.34, 569.38 381.17 C 570.03 382.00, 570.66 382.11, 571.50 382.30 C 572.34 382.50, 572.96 382.45, 573.58 382.14 C 574.20 381.84, 574.58 381.28, 574.62 380.76 C 574.66 380.25, 574.19 379.76, 573.78 379.57 C 573.36 379.38, 572.96 379.64, 572.54 379.80 C 572.12 379.95, 572.05 380.26, 571.68 380.34 C 571.31 380.43, 570.94 380.62, 570.71 380.22 C 570.48 379.82, 570.26 379.65, 570.51 378.34 C 570.77 377.03, 571.14 376.00, 572.00 373.68 C 572.85 371.36, 573.36 369.86, 574.79 366.75 C 576.22 363.63, 577.18 361.77, 579.15 358.11 C 581.13 354.46, 582.39 352.38, 584.67 348.47 C 586.95 344.56, 588.28 342.38, 590.56 338.56 C 592.83 334.74, 594.04 332.69, 596.06 329.37 C 598.09 326.05, 599.30 324.48, 600.67 321.96 C 602.05 319.43, 602.35 318.35, 602.92 316.73 C 603.49 315.10, 603.61 314.53, 603.51 313.85 C 603.41 313.16, 603.03 312.99, 602.44 313.31" 
    style={{ ...style }}
    />
    <path d="M 627.54,312.94 C 627.01 313.23, 626.83 313.59, 625.94 314.83 C 625.04 316.07, 624.36 316.82, 623.06 319.15 C 621.75 321.47, 621.13 323.22, 619.41 326.45 C 617.70 329.69, 616.60 331.67, 614.48 335.32 C 612.36 338.96, 611.01 340.97, 608.80 344.66 C 606.58 348.35, 605.37 350.32, 603.41 353.76 C 601.44 357.20, 600.43 358.87, 598.97 361.86 C 597.50 364.84, 596.85 366.25, 596.09 368.68 C 595.33 371.12, 595.15 372.24, 595.16 374.03 C 595.18 375.82, 595.68 376.62, 596.17 377.64 C 596.66 378.66, 597.18 378.92, 597.62 379.13 C 598.05 379.34, 598.28 379.10, 598.35 378.69 C 598.41 378.28, 598.07 377.98, 597.93 377.06 C 597.79 376.15, 597.48 375.65, 597.64 374.14 C 597.80 372.63, 597.99 371.76, 598.72 369.53 C 599.46 367.29, 599.98 365.90, 601.32 362.98 C 602.66 360.05, 603.55 358.32, 605.44 354.90 C 607.33 351.47, 608.52 349.50, 610.75 345.84 C 612.98 342.19, 614.35 340.18, 616.60 336.60 C 618.86 333.03, 620.08 331.09, 622.04 327.96 C 623.99 324.83, 625.11 323.34, 626.37 320.95 C 627.63 318.56, 627.89 317.52, 628.34 316.00 C 628.79 314.49, 628.77 314.00, 628.61 313.39 C 628.45 312.77, 628.08 312.65, 627.54 312.94" 
    style={{ ...style }}
    />
    <path d="M 660.69,352.50 C 660.56 351.93, 660.22 351.39, 659.34 350.77 C 658.46 350.14, 657.80 349.70, 656.28 349.39 C 654.77 349.07, 653.72 348.93, 651.75 349.19 C 649.79 349.46, 648.67 349.84, 646.46 350.73 C 644.24 351.61, 642.95 352.21, 640.66 353.63 C 638.38 355.06, 637.07 356.01, 635.02 357.86 C 632.97 359.71, 631.88 360.84, 630.41 362.90 C 628.95 364.95, 628.28 366.12, 627.69 368.14 C 627.10 370.16, 627.00 371.25, 627.47 373.01 C 627.94 374.76, 628.51 375.66, 630.03 376.91 C 631.55 378.17, 632.69 378.71, 635.08 379.27 C 637.47 379.83, 639.00 379.94, 641.99 379.72 C 644.98 379.50, 646.76 379.07, 650.03 378.19 C 653.29 377.31, 655.12 376.69, 658.33 375.32 C 661.53 373.95, 663.23 373.09, 666.04 371.34 C 668.85 369.59, 670.30 368.60, 672.38 366.58 C 674.45 364.55, 675.31 363.34, 676.40 361.21 C 677.48 359.09, 677.77 357.92, 677.80 355.96 C 677.84 354.00, 677.49 352.98, 676.57 351.41 C 675.66 349.84, 674.81 349.09, 673.22 348.10 C 671.63 347.10, 670.40 346.75, 668.62 346.42 C 666.85 346.10, 665.77 346.25, 664.37 346.45 C 662.96 346.65, 662.38 346.99, 661.58 347.43 C 660.79 347.87, 660.54 348.23, 660.37 348.63 C 660.20 349.02, 660.37 349.24, 660.72 349.41 C 661.06 349.58, 661.33 349.41, 662.09 349.46 C 662.85 349.50, 663.34 349.56, 664.52 349.63 C 665.71 349.71, 666.59 349.59, 668.03 349.83 C 669.46 350.06, 670.44 350.22, 671.71 350.81 C 672.98 351.41, 673.65 351.79, 674.37 352.80 C 675.08 353.81, 675.36 354.45, 675.28 355.87 C 675.19 357.28, 674.95 358.17, 673.94 359.87 C 672.93 361.57, 672.12 362.55, 670.23 364.36 C 668.34 366.17, 667.10 367.24, 664.50 368.90 C 661.90 370.56, 660.26 371.42, 657.21 372.68 C 654.17 373.94, 652.37 374.50, 649.28 375.20 C 646.19 375.90, 644.47 376.03, 641.76 376.19 C 639.04 376.36, 637.73 376.32, 635.70 376.03 C 633.68 375.73, 632.80 375.46, 631.62 374.74 C 630.44 374.01, 630.06 373.56, 629.80 372.42 C 629.54 371.29, 629.70 370.57, 630.34 369.06 C 630.98 367.55, 631.61 366.58, 633.01 364.87 C 634.41 363.16, 635.43 362.14, 637.35 360.50 C 639.26 358.87, 640.48 357.99, 642.57 356.70 C 644.66 355.41, 645.86 354.85, 647.80 354.06 C 649.74 353.26, 650.68 352.98, 652.27 352.73 C 653.85 352.48, 654.54 352.69, 655.72 352.81 C 656.90 352.94, 657.31 353.20, 658.16 353.36 C 659.01 353.53, 659.46 353.81, 659.96 353.64 C 660.47 353.46, 660.81 353.07, 660.69 352.50" 
    style={{ ...style }}
    />
    <path d="M 794.75,316.88 C 794.21 317.31, 793.96 317.88, 793.24 319.34 C 792.53 320.81, 792.04 321.76, 791.16 324.21 C 790.27 326.65, 789.96 328.38, 788.81 331.57 C 787.66 334.76, 786.94 336.64, 785.41 340.15 C 783.89 343.66, 782.95 345.60, 781.18 349.12 C 779.40 352.64, 778.37 354.49, 776.54 357.75 C 774.71 361.01, 773.70 362.63, 772.03 365.41 C 770.35 368.18, 769.47 369.51, 768.17 371.62 C 766.87 373.73, 766.29 374.60, 765.52 375.96 C 764.75 377.33, 764.55 377.74, 764.31 378.44 C 764.08 379.14, 764.27 379.29, 764.33 379.48 C 764.39 379.67, 764.60 379.41, 764.60 379.41 C 764.59 379.41, 764.28 379.39, 764.30 379.49 C 764.32 379.59, 764.39 379.92, 764.69 379.91 C 764.99 379.90, 765.21 379.95, 765.79 379.44 C 766.38 378.93, 766.63 378.60, 767.60 377.35 C 768.58 376.10, 769.30 375.29, 770.66 373.18 C 772.01 371.06, 772.76 369.62, 774.37 366.77 C 775.98 363.93, 776.90 362.25, 778.70 358.94 C 780.49 355.63, 781.53 353.77, 783.35 350.23 C 785.18 346.69, 786.14 344.75, 787.82 341.26 C 789.50 337.76, 790.39 335.91, 791.76 332.74 C 793.14 329.57, 793.86 327.94, 794.69 325.43 C 795.51 322.91, 795.64 321.81, 795.89 320.17 C 796.14 318.53, 796.16 317.88, 795.94 317.22 C 795.71 316.56, 795.29 316.46, 794.75 316.88" 
    style={{ ...style }}
    />
    <path d="M 782.07,309.74 C 782.72 309.64, 783.12 309.07, 784.38 308.37 C 785.64 307.67, 786.36 307.15, 788.39 306.24 C 790.41 305.34, 791.67 304.62, 794.50 303.85 C 797.33 303.07, 799.07 302.67, 802.53 302.35 C 805.99 302.04, 808.04 302.00, 811.81 302.28 C 815.58 302.57, 817.65 302.84, 821.37 303.78 C 825.09 304.73, 827.05 305.39, 830.39 307.01 C 833.72 308.63, 835.39 309.67, 838.04 311.87 C 840.70 314.07, 841.93 315.37, 843.68 318.00 C 845.44 320.63, 846.13 322.07, 846.83 325.01 C 847.53 327.95, 847.61 329.51, 847.18 332.71 C 846.74 335.90, 846.22 337.64, 844.65 341.01 C 843.07 344.38, 841.92 346.20, 839.29 349.54 C 836.67 352.88, 834.97 354.59, 831.52 357.69 C 828.08 360.80, 826.03 362.33, 822.08 365.06 C 818.14 367.78, 815.91 369.09, 811.80 371.31 C 807.69 373.53, 805.46 374.53, 801.54 376.14 C 797.62 377.75, 795.60 378.40, 792.20 379.34 C 788.80 380.29, 787.15 380.49, 784.54 380.88 C 781.93 381.27, 780.83 381.36, 779.17 381.28 C 777.50 381.21, 777.06 380.79, 776.22 380.50 C 775.39 380.21, 775.29 380.10, 774.99 379.82 C 774.69 379.55, 774.92 379.24, 774.71 379.12 C 774.49 378.99, 774.09 378.88, 773.91 379.18 C 773.72 379.47, 773.50 379.96, 773.78 380.59 C 774.06 381.23, 774.27 381.72, 775.30 382.35 C 776.33 382.99, 777.00 383.50, 778.93 383.76 C 780.86 384.02, 782.17 384.10, 784.96 383.67 C 787.75 383.24, 789.40 382.73, 792.88 381.61 C 796.36 380.49, 798.38 379.78, 802.35 378.06 C 806.32 376.35, 808.57 375.31, 812.73 373.03 C 816.90 370.75, 819.16 369.42, 823.19 366.66 C 827.22 363.90, 829.31 362.36, 832.88 359.21 C 836.44 356.06, 838.22 354.34, 841.00 350.91 C 843.79 347.47, 845.05 345.60, 846.79 342.03 C 848.52 338.46, 849.16 336.58, 849.67 333.06 C 850.18 329.53, 850.11 327.71, 849.34 324.42 C 848.56 321.13, 847.73 319.47, 845.78 316.59 C 843.84 313.70, 842.46 312.33, 839.59 309.99 C 836.72 307.65, 834.94 306.58, 831.42 304.88 C 827.89 303.17, 825.85 302.50, 821.97 301.48 C 818.09 300.46, 815.95 300.17, 812.03 299.78 C 808.10 299.39, 806.02 299.39, 802.35 299.54 C 798.68 299.68, 796.79 299.82, 793.68 300.51 C 790.57 301.19, 789.01 301.84, 786.81 302.97 C 784.61 304.10, 783.79 304.99, 782.66 306.17 C 781.52 307.34, 781.26 308.15, 781.14 308.86 C 781.02 309.58, 781.43 309.84, 782.07 309.74" 
    style={{ ...style }}
    />
    <path d="M 854.86,366.16 C 855.32 366.47, 855.79 366.56, 856.96 366.53 C 858.13 366.49, 858.90 366.41, 860.72 365.99 C 862.54 365.57, 863.74 365.21, 866.07 364.43 C 868.40 363.64, 869.82 363.12, 872.35 362.08 C 874.88 361.04, 876.34 360.40, 878.73 359.23 C 881.12 358.06, 882.38 357.43, 884.30 356.22 C 886.22 355.00, 887.15 354.41, 888.33 353.16 C 889.50 351.91, 889.98 351.21, 890.17 349.97 C 890.36 348.73, 890.19 347.96, 889.29 346.95 C 888.39 345.95, 887.60 345.40, 885.65 344.94 C 883.70 344.49, 882.35 344.31, 879.53 344.69 C 876.70 345.07, 874.95 345.66, 871.53 346.84 C 868.11 348.03, 866.06 348.87, 862.42 350.61 C 858.78 352.35, 856.71 353.46, 853.32 355.53 C 849.93 357.60, 848.10 358.75, 845.45 360.97 C 842.80 363.18, 841.54 364.35, 840.07 366.59 C 838.60 368.84, 838.20 370.08, 838.11 372.20 C 838.02 374.31, 838.34 375.41, 839.62 377.18 C 840.89 378.95, 841.97 379.87, 844.48 381.06 C 846.99 382.24, 848.71 382.55, 852.16 383.12 C 855.62 383.69, 857.66 383.78, 861.76 383.91 C 865.86 384.04, 868.57 383.91, 872.68 383.78 C 876.79 383.64, 879.08 383.61, 882.29 383.25 C 885.50 382.90, 887.47 382.49, 888.74 382.01 C 890.01 381.53, 889.96 381.10, 888.63 380.85 C 887.31 380.61, 885.33 380.72, 882.13 380.80 C 878.92 380.87, 876.66 381.13, 872.61 381.23 C 868.56 381.33, 865.85 381.52, 861.87 381.31 C 857.89 381.10, 855.91 380.84, 852.69 380.21 C 849.47 379.57, 848.01 379.03, 845.78 378.12 C 843.56 377.20, 842.64 376.78, 841.55 375.62 C 840.47 374.47, 840.22 373.85, 840.37 372.35 C 840.52 370.85, 840.95 370.00, 842.31 368.14 C 843.67 366.27, 844.71 365.10, 847.17 363.01 C 849.63 360.91, 851.36 359.67, 854.63 357.67 C 857.90 355.66, 859.96 354.57, 863.52 352.98 C 867.08 351.39, 869.13 350.65, 872.43 349.73 C 875.73 348.82, 877.46 348.74, 880.01 348.42 C 882.57 348.10, 883.63 348.10, 885.21 348.13 C 886.80 348.16, 887.31 348.30, 887.94 348.57 C 888.57 348.84, 888.65 348.98, 888.37 349.49 C 888.09 350.01, 887.68 350.35, 886.55 351.15 C 885.41 351.94, 884.56 352.48, 882.70 353.47 C 880.84 354.46, 879.61 355.05, 877.27 356.08 C 874.93 357.10, 873.48 357.68, 870.99 358.60 C 868.50 359.53, 867.09 359.94, 864.82 360.70 C 862.55 361.46, 861.36 361.78, 859.65 362.41 C 857.95 363.04, 857.30 363.35, 856.30 363.86 C 855.29 364.37, 854.91 364.50, 854.62 364.96 C 854.34 365.42, 854.39 365.84, 854.86 366.16" 
    style={{ ...style }}
    />
    <path d="M 1036.84,312.53 C 1036.31 312.82, 1036.09 313.23, 1035.29 314.43 C 1034.48 315.62, 1033.92 316.33, 1032.82 318.51 C 1031.71 320.69, 1031.21 322.25, 1029.78 325.34 C 1028.35 328.42, 1027.55 330.30, 1025.66 333.92 C 1023.77 337.55, 1022.57 339.59, 1020.35 343.45 C 1018.13 347.32, 1016.86 349.41, 1014.55 353.25 C 1012.23 357.08, 1010.99 359.08, 1008.79 362.62 C 1006.59 366.15, 1005.48 367.91, 1003.55 370.93 C 1001.62 373.95, 1000.60 375.34, 999.15 377.71 C 997.70 380.09, 997.15 381.18, 996.30 382.80 C 995.44 384.43, 995.21 384.93, 994.87 385.85 C 994.54 386.78, 994.61 387.02, 994.60 387.43 C 994.60 387.83, 994.74 387.77, 994.84 387.88 C 994.94 387.99, 994.95 387.97, 995.09 387.97 C 995.23 387.98, 995.22 388.12, 995.53 387.89 C 995.84 387.66, 996.05 387.59, 996.64 386.84 C 997.24 386.08, 997.50 385.63, 998.50 384.10 C 999.50 382.58, 1000.22 381.60, 1001.64 379.22 C 1003.07 376.84, 1003.82 375.29, 1005.62 372.19 C 1007.42 369.10, 1008.50 367.33, 1010.65 363.76 C 1012.80 360.19, 1014.04 358.18, 1016.36 354.34 C 1018.68 350.51, 1019.96 348.42, 1022.26 344.58 C 1024.57 340.74, 1025.81 338.71, 1027.88 335.15 C 1029.95 331.58, 1030.97 329.78, 1032.62 326.77 C 1034.27 323.76, 1035.11 322.35, 1036.14 320.10 C 1037.16 317.85, 1037.38 316.95, 1037.74 315.52 C 1038.10 314.09, 1038.14 313.57, 1037.96 312.97 C 1037.78 312.37, 1037.38 312.23, 1036.84 312.53" 
    style={{ ...style }}
    />
    <path d="M 1012.50,311.50 C 1013.03 311.75, 1013.47 311.66, 1014.81 311.59 C 1016.16 311.52, 1016.98 311.46, 1019.22 311.15 C 1021.47 310.83, 1022.95 310.49, 1026.04 310.03 C 1029.12 309.56, 1031.01 309.24, 1034.64 308.83 C 1038.26 308.43, 1040.36 308.24, 1044.15 307.99 C 1047.93 307.74, 1050.00 307.63, 1053.56 307.57 C 1057.12 307.52, 1058.94 307.58, 1061.94 307.73 C 1064.95 307.87, 1066.36 308.04, 1068.58 308.30 C 1070.81 308.57, 1071.71 308.83, 1073.07 309.06 C 1074.43 309.30, 1074.74 309.34, 1075.38 309.49 C 1076.03 309.65, 1076.02 309.86, 1076.29 309.84 C 1076.57 309.82, 1076.78 309.73, 1076.74 309.40 C 1076.71 309.07, 1076.72 308.72, 1076.12 308.18 C 1075.51 307.64, 1075.16 307.25, 1073.73 306.71 C 1072.30 306.16, 1071.31 305.83, 1068.98 305.46 C 1066.64 305.09, 1065.15 304.96, 1062.06 304.87 C 1058.96 304.77, 1057.12 304.87, 1053.51 304.98 C 1049.89 305.08, 1047.82 305.20, 1043.99 305.41 C 1040.17 305.61, 1038.06 305.77, 1034.39 306.00 C 1030.71 306.23, 1028.78 306.27, 1025.62 306.57 C 1022.45 306.86, 1020.87 307.01, 1018.58 307.49 C 1016.29 307.97, 1015.46 308.39, 1014.17 308.97 C 1012.89 309.54, 1012.49 309.85, 1012.15 310.35 C 1011.82 310.86, 1011.97 311.26, 1012.50 311.50" 
    style={{ ...style }}
    />
    <path d="M 1003.65,351.64 C 1004.07 351.96, 1004.33 352.08, 1005.60 352.16 C 1006.88 352.23, 1007.81 352.30, 1010.03 352.02 C 1012.24 351.73, 1013.68 351.30, 1016.67 350.73 C 1019.67 350.15, 1021.54 349.73, 1025.01 349.14 C 1028.47 348.56, 1030.67 348.28, 1033.99 347.80 C 1037.30 347.32, 1039.07 347.20, 1041.58 346.75 C 1044.09 346.30, 1045.55 346.01, 1046.53 345.55 C 1047.50 345.09, 1047.48 344.74, 1046.44 344.45 C 1045.39 344.15, 1043.87 344.00, 1041.30 344.07 C 1038.74 344.15, 1036.94 344.41, 1033.59 344.82 C 1030.24 345.22, 1028.05 345.65, 1024.55 346.11 C 1021.05 346.57, 1019.11 346.69, 1016.07 347.12 C 1013.04 347.55, 1011.55 347.78, 1009.37 348.26 C 1007.20 348.74, 1006.37 349.06, 1005.19 349.52 C 1004.02 349.97, 1003.80 350.12, 1003.49 350.55 C 1003.18 350.97, 1003.22 351.31, 1003.65 351.64" 
    style={{ ...style }}
    />
    <path d="M 1061.88,375.47 C 1062.43 375.74, 1062.92 375.78, 1064.36 375.68 C 1065.81 375.58, 1066.83 375.53, 1069.09 374.99 C 1071.35 374.44, 1072.88 373.96, 1075.67 372.95 C 1078.46 371.94, 1080.10 371.19, 1083.06 369.94 C 1086.02 368.69, 1087.68 368.01, 1090.45 366.71 C 1093.23 365.41, 1094.71 364.75, 1096.94 363.43 C 1099.18 362.11, 1100.19 361.42, 1101.62 360.10 C 1103.06 358.78, 1103.66 358.13, 1104.11 356.83 C 1104.57 355.52, 1104.57 354.72, 1103.91 353.59 C 1103.25 352.46, 1102.54 351.79, 1100.81 351.18 C 1099.07 350.57, 1097.85 350.36, 1095.24 350.55 C 1092.63 350.74, 1091.01 351.16, 1087.76 352.14 C 1084.52 353.12, 1082.58 353.87, 1079.03 355.44 C 1075.48 357.02, 1073.44 358.05, 1070.02 360.02 C 1066.60 361.99, 1064.76 363.14, 1061.91 365.29 C 1059.07 367.43, 1057.62 368.53, 1055.80 370.75 C 1053.97 372.98, 1053.35 374.23, 1052.80 376.42 C 1052.25 378.62, 1052.32 379.76, 1053.04 381.71 C 1053.76 383.67, 1054.51 384.65, 1056.40 386.18 C 1058.30 387.72, 1059.66 388.44, 1062.52 389.38 C 1065.39 390.32, 1067.19 390.50, 1070.74 390.89 C 1074.29 391.29, 1076.30 391.36, 1080.27 391.36 C 1084.24 391.36, 1086.78 391.17, 1090.59 390.91 C 1094.40 390.66, 1096.45 390.58, 1099.34 390.09 C 1102.23 389.61, 1103.92 389.03, 1105.02 388.48 C 1106.13 387.94, 1106.05 387.57, 1104.86 387.37 C 1103.66 387.17, 1101.93 387.31, 1099.04 387.49 C 1096.15 387.67, 1094.16 388.02, 1090.41 388.27 C 1086.66 388.52, 1084.15 388.79, 1080.29 388.75 C 1076.43 388.70, 1074.46 388.56, 1071.11 388.04 C 1067.77 387.53, 1066.17 387.03, 1063.57 386.18 C 1060.98 385.33, 1059.82 384.86, 1058.15 383.79 C 1056.49 382.72, 1055.86 382.16, 1055.26 380.82 C 1054.66 379.48, 1054.60 378.74, 1055.15 377.10 C 1055.70 375.46, 1056.33 374.55, 1058.01 372.60 C 1059.68 370.66, 1060.86 369.46, 1063.52 367.38 C 1066.18 365.31, 1067.97 364.12, 1071.29 362.24 C 1074.60 360.35, 1076.63 359.35, 1080.09 357.95 C 1083.56 356.56, 1085.52 356.01, 1088.61 355.26 C 1091.71 354.51, 1093.25 354.44, 1095.56 354.21 C 1097.86 353.97, 1098.78 353.98, 1100.14 354.08 C 1101.51 354.19, 1101.94 354.34, 1102.38 354.71 C 1102.81 355.08, 1102.79 355.29, 1102.30 355.95 C 1101.81 356.60, 1101.29 357.02, 1099.91 357.97 C 1098.53 358.92, 1097.55 359.52, 1095.39 360.70 C 1093.23 361.87, 1091.82 362.59, 1089.12 363.84 C 1086.41 365.08, 1084.79 365.82, 1081.85 366.93 C 1078.92 368.04, 1077.22 368.51, 1074.46 369.39 C 1071.70 370.27, 1070.20 370.61, 1068.04 371.32 C 1065.89 372.04, 1064.97 372.39, 1063.68 372.98 C 1062.39 373.58, 1061.96 373.81, 1061.60 374.30 C 1061.23 374.80, 1061.32 375.19, 1061.88 375.47" 
    style={{ ...style }}
    />
    <path d="M 1152.09,366.80 C 1152.15 366.22, 1152.01 365.60, 1151.37 364.78 C 1150.73 363.96, 1150.21 363.37, 1148.88 362.70 C 1147.54 362.04, 1146.60 361.64, 1144.70 361.46 C 1142.80 361.28, 1141.70 361.38, 1139.37 361.80 C 1137.04 362.23, 1135.63 362.59, 1133.04 363.57 C 1130.44 364.55, 1128.95 365.24, 1126.42 366.71 C 1123.88 368.18, 1122.47 369.12, 1120.36 370.94 C 1118.24 372.76, 1117.16 373.83, 1115.83 375.80 C 1114.50 377.78, 1113.98 378.89, 1113.69 380.83 C 1113.41 382.77, 1113.54 383.84, 1114.40 385.51 C 1115.26 387.18, 1116.07 388.02, 1117.99 389.16 C 1119.91 390.30, 1121.24 390.79, 1124.01 391.20 C 1126.78 391.60, 1128.52 391.50, 1131.84 391.20 C 1135.16 390.90, 1137.13 390.53, 1140.62 389.69 C 1144.11 388.86, 1146.02 388.28, 1149.29 387.01 C 1152.57 385.74, 1154.26 384.98, 1157.00 383.35 C 1159.74 381.71, 1161.07 380.76, 1162.99 378.86 C 1164.90 376.95, 1165.64 375.84, 1166.58 373.80 C 1167.52 371.76, 1167.73 370.61, 1167.68 368.64 C 1167.64 366.68, 1167.28 365.63, 1166.35 363.98 C 1165.42 362.32, 1164.61 361.53, 1163.02 360.38 C 1161.43 359.22, 1160.32 358.72, 1158.41 358.19 C 1156.51 357.66, 1155.19 357.68, 1153.51 357.74 C 1151.83 357.80, 1151.09 358.09, 1150.00 358.50 C 1148.91 358.92, 1148.40 359.35, 1148.07 359.81 C 1147.75 360.26, 1147.91 360.56, 1148.37 360.76 C 1148.84 360.97, 1149.38 360.77, 1150.39 360.83 C 1151.40 360.89, 1152.00 360.92, 1153.43 361.06 C 1154.86 361.20, 1155.97 361.14, 1157.54 361.52 C 1159.11 361.90, 1159.99 362.18, 1161.27 362.96 C 1162.56 363.74, 1163.20 364.27, 1163.95 365.42 C 1164.71 366.57, 1165.02 367.27, 1165.06 368.71 C 1165.10 370.15, 1164.97 371.01, 1164.14 372.62 C 1163.32 374.23, 1162.66 375.11, 1160.94 376.76 C 1159.21 378.41, 1158.04 379.33, 1155.51 380.87 C 1152.99 382.40, 1151.40 383.23, 1148.29 384.43 C 1145.19 385.64, 1143.32 386.19, 1139.98 386.91 C 1136.65 387.63, 1134.71 387.87, 1131.61 388.03 C 1128.51 388.20, 1126.93 388.05, 1124.48 387.74 C 1122.04 387.44, 1120.96 387.18, 1119.37 386.50 C 1117.78 385.81, 1117.19 385.36, 1116.55 384.32 C 1115.91 383.28, 1115.84 382.65, 1116.18 381.30 C 1116.52 379.96, 1116.99 379.14, 1118.25 377.58 C 1119.52 376.03, 1120.51 375.09, 1122.50 373.54 C 1124.48 371.98, 1125.80 371.11, 1128.17 369.80 C 1130.53 368.49, 1131.95 367.89, 1134.33 366.99 C 1136.70 366.09, 1138.03 365.73, 1140.04 365.32 C 1142.06 364.91, 1142.92 364.83, 1144.40 364.94 C 1145.88 365.05, 1146.43 365.45, 1147.45 365.85 C 1148.47 366.25, 1148.78 366.58, 1149.50 366.94 C 1150.22 367.30, 1150.54 367.69, 1151.05 367.66 C 1151.57 367.63, 1152.03 367.37, 1152.09 366.80" 
    style={{ ...style }}
      />
  </svg>
);
<script setup lang="ts">
const props = defineProps<{
  primary: string
  accent: string
}>()
</script>

<template>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="800px"
    height="800px"
    preserveAspectRatio="xMidYMid meet"
  >
    <filter id="neon">
      <feFlood
        flood-color="rgb(0,255,255)"
        flood-opacity="0.5"
        in="SourceGraphic"
      />
      <feComposite
        operator="in"
        in2="SourceGraphic"
      />
      <feGaussianBlur stdDeviation="10" />
      <feComponentTransfer result="glow1">
        <feFuncA
          type="linear"
          slope="4"
          intercept="0"
        />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode in="glow1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <g
      :fill="props.primary"
    >
      <path d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.003,0,111.063,0,248.085c0,137.002,111.07,248.07,248.082,248.07C385.088,496.155,496.158,385.087,496.158,248.085z" />
    </g>
    <g
      :fill="props.accent"
      filter="url(#neon)"
    >
      <path
        d="M373.299,154.891c-19.558-26.212-47.401-46.023-78.401-55.787c-0.759-0.238-1.588-0.103-2.229,0.369c-0.643,0.471-1.021,1.22-1.021,2.016l0.16,40.256c0,1.074,0.514,2.06,1.332,2.562c31.732,19.456,66.504,47,66.504,103.237c0,61.515-50.047,111.56-111.562,111.56c-61.517,0-111.566-50.045-111.566-111.56c0-58.737,35.199-84.661,67.615-103.917c0.836-0.496,1.363-1.492,1.363-2.58l0.154-39.909c0-0.793-0.375-1.539-1.013-2.01c-0.638-0.472-1.46-0.611-2.219-0.381c-31.283,9.586-59.41,29.357-79.202,55.672c-20.467,27.215-31.285,59.603-31.285,93.662c0,86.099,70.049,156.146,156.152,156.146c86.1,0,156.147-70.047,156.147-156.146C404.228,214.235,393.533,182.01,373.299,154.891z"
      />
      <path
        d="M251.851,67.009h-7.549c-11.788,0-21.378,9.59-21.378,21.377v181.189c0,11.787,9.59,21.377,21.378,21.377h7.549c11.788,0,21.378-9.59,21.378-21.377V88.386C273.229,76.599,263.64,67.009,251.851,67.009z"
      />
    </g>
  </svg>
</template>

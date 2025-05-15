/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      sm:'340px',
      md:'540px',
      lg:'768px',
      xl:'1180px'
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #E73D6C, #447ADA)',
      },
      colors:{
        "primary":"#FFFFFF",
        "secondary":"#344054",
        "bg-shadow":"#F2F4F7"
      },
      fontFamily:{
        "Lexend-Deca": ["Poppins", "sans-serif"]
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'12px',
          md:'32px'
        },
      },
    },
  },
  plugins: [],
}


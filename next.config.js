/** @type {import('next').NextConfig} */

module.exports ={
    output: 'export',
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'openweathermap.org'
            }
        ]
    }
}

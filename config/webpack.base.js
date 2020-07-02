/**
 * 公共配置
 */
module.exports = {
    module: {
        rules: [
            {   //babel
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }, 
            { //file
                test:/\.(jpg|jpeg|png|gif|cur|ico|svg)$/,
                use:[{
                    loader:'file-loader',options:{
                        name:"images/[name][hash:8].[ext]"
                    }
                }]

            }
        ]


    }

}
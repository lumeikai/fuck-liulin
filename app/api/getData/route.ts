import { NextRequest, NextResponse } from 'next/server'
const mysql = require('mysql2/promise')

// 创建全局的 MySQL 连接池
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '192.168.62.136', // 服务器地址
    user: 'root',
    password: '123456', // 密码
    database: 'mysql',
})

export async function GET() {
    try {
        // 从连接池中获取连接
        const connection = await pool.getConnection()

        // 执行 MySQL 查询
        const [rows, fields] = await connection.query('SELECT * FROM user')
        // 释放连接回连接池
        connection.release()

        return NextResponse.json({ data: rows, status: 200 })
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function POST(params: NextRequest) {
    // 从连接池中获取连接
    // const connection = await pool.getConnection()
    // 执行 MySQL 查询
    // const [rows, fields] = await connection.query('SELECT * FROM users')
    const sss = await params.json()

    try {
        let status = 'success'
        sss.forEach(async (item: any) => {
            const sql =
                `INSERT INTO \`users\`(\`name\`, \`age\`, \`id\`) VALUES (?, ?, ?)`;
            const [result, fields] = await pool.query(sql, [item.name, Number(item.age), item.id]);
        });

        return NextResponse.json({ data: status, status: 200 })

    } catch (err) {
        return NextResponse.json({ data: 'refuse', status: 30000 })

    }
}


import { revalidatePath } from "next/cache"
import { neon } from '@neondatabase/serverless'
const sql = neon(`${process.env.DATABASE_URL}`)

export default async function Page() {
  const result = await sql('SELECT * FROM users')

  async function createPost(formDate:FormData) {
    'use server'
    const username = formDate.get('username')
    const password = formDate.get('password')
    await sql('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password])
    revalidatePath('/')
  }
  console.log(result)
  return (
    <div>
        <form action={createPost}>
          <p>用户名：<input className='border' type="text" name='username' /></p>
          <p>密码：<input className='border' type="password" name='password' /></p>
          <button type="submit">提交</button>
        </form>
        <ul>
        {
          result.map((it,i) => <li key={i}><strong>{it.username}</strong>{it.password}</li>)
        }
        </ul>
        
    </div>
  );
}

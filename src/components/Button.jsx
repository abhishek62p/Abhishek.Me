export function Button({submit, handleSubmit}) {
    return <div>
        <button type={submit} onSubmit={handleSubmit} className="bg-yellow font-medium text-black rounded-md py-2 px-4">Contact us</button>
    </div>
}
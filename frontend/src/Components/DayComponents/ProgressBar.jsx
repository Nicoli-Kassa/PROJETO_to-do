export default function ProgressBar({ tasks }) { // Recebe as tasks como props
  // Calcula o progresso com base nas tasks
  const total = tasks.length; // Pega o total de tasks
  const completed = tasks.filter(t => t.completed).length; // Conta quantas tasks estão concluídas
  const progress = total === 0 ? 0 : (completed / total) * 100; // Calcula a porcentagem de progresso

  return (
    <div className="flex flex-col items-center justify-center gap-1 
                    bg-[#fffcfc] border-6 border-[#C6CBB2] rounded-3xl 
                    h-30 mx-15 p-4">
      <h2 className='text-center text-[25px] font-semibold'>Progress</h2>
      
      {/* Barra de fundo */}
      <div className="flex bg-[#C6CBB2] rounded-3xl w-[90%] h-6">
        {/* Barra de progresso */}
        <div
          className="bg-green-500 h-6 rounded-3xl transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Texto de progresso */}
      <p className="text-gray-700 text-[16px]">
        {completed} de {total} tarefas concluídas
      </p>
    </div>
  );
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Cpu, Zap, BarChart3, Lock, Globe } from "lucide-react"
import Bground from "@/components/animation/bg"
import Comprar from "@/components/modais"
export default function Home() {
  return (
    <div className=" min-h-screen flex-col bg-black text-white">

     <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container-center flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Brain className="h-6 w-6 text-red-600 mx-2" />
            <span>dunamisAI</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container-center px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-6 xl:grid-cols-[1fr_600px]">
              <div className="lg:mx-50 flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Apresentando dunamisAI
</h1>
<p className="max-w-[600px] text-gray-400 md:text-xl">
A próxima geração de inteligência artificial que entende, aprende e se adapta às suas necessidades
com precisão sem precedentes.
</p>
</div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="inline-block rounded-lg bg-red-600 px-3 py-1 text-sm text-white">
                    <Link href="/duna.IA" style={{textDecoration:'none',color:'white'}}> Experimente agora
                    </Link>
                   </Button>
                  <Button size="lg" variant="outline" >
                  <Link href="#pricing" style={{textDecoration:'none',color:'white'}}>Planos
                  </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <video
        width={450}
        height={500}
        autoPlay
        muted
        className="rounded-lg object-cover lg:mt-4 h-[350px] w-[500px]"
        src="./bg.mp4"
      >
      </video>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container-center px-4 md:px-6">
        <Bground/>

          </div>
          </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <div className="inline-block rounded-lg bg-red-600 px-3 py-1 text-sm text-white">Revolucionário</div>
<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Principais recursos</h2>
<p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
dunamisAI traz recursos de ponta que redefinem o que é possível com inteligência artificial
</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Cpu className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Processamento Neural Avançado</CardTitle>
<CardDescription className="text-gray-400">
Redes neurais multicamadas que processam informações semelhantes ao cérebro humano.
</CardDescription>
</CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                <Zap className="h-10 w-10 text-red-600 mb-2" />
<CardTitle>Aprendizagem em tempo real</CardTitle>
<CardDescription className="text-gray-400">
Melhora continuamente por meio de interações, adaptando-se a novas informações instantaneamente.
</CardDescription>
</CardHeader>
</Card>
<Card className="bg-gray-800 text-white">
<CardHeader>
<BarChart3 className="h-10 w-10 text-red-600 mb-2" />
<CardTitle>Análise preditiva</CardTitle>
<CardDescription className="text-gray-400">
Prevê tendências e resultados com precisão sem precedentes com base em dados históricos.
</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Globe className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Entendimento multilíngue</CardTitle>
<CardDescription className="text-gray-400">
Compreende e gera conteúdo em mais de 100 idiomas com fluência de nível nativo.
</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Lock className="h-10 w-10 text-red-600 mb-2" />
<CardTitle>Segurança aprimorada</CardTitle>
<CardDescription className="text-gray-400">
Proteções de privacidade e medidas de segurança integradas para manter seus dados seguros.
</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Brain className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Consciência Contextual</CardTitle>
<CardDescription className="text-gray-400">
Compreende nuances, contexto e significado implícito na comunicação.
</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="capabilities" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Capacidades</h2>
<p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
Explore o que o dunamisAI pode fazer em diferentes domínios e aplicativos
</p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="business" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="business">Negócios</TabsTrigger>
<TabsTrigger value="healthcare">Assistência médica</TabsTrigger>
<TabsTrigger value="education">Educação</TabsTrigger>
                </TabsList>
                <TabsContent value="business" className="p-4 bg-gray-800 text-white">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Análise de Mercado</CardTitle>
</CardHeader>
<CardContent>
<p>
Processe grandes quantidades de dados de mercado para identificar tendências, oportunidades e riscos potenciais.
</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Insights do cliente</CardTitle>
</CardHeader>
<CardContent>
<p>
Analise o comportamento e o feedback do cliente para fornecer insights acionáveis ​​para o crescimento do negócio.
</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Automação de Processos</CardTitle>
</CardHeader>
<CardContent>
<p>Simplifique os fluxos de trabalho e automatize tarefas repetitivas para aumentar a eficiência operacional.</p>
</CardContent>
</Card>
<Card className="bg-gray-800 text-white">
<CardHeader>
<CardTitle>Suporte à Decisão</CardTitle>
</CardHeader>
<CardContent>
<p>Forneça recomendações baseadas em dados para dar suporte a decisões estratégicas de negócios.</p>
</CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="healthcare" className="p-4 bg-gray-800 text-white">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Assistência diagnóstica</CardTitle>
</CardHeader>
<CardContent>
<p>
Dê suporte a profissionais médicos com análises precisas de dados de pacientes e diagnóstico por imagem.
</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Planejamento de tratamento</CardTitle>
</CardHeader>
<CardContent>
<p>Analise a literatura médica e o histórico do paciente para sugerir opções de tratamento personalizadas.</p>
</CardContent>
</Card>
<Card className="bg-gray-800 text-white">
<CardHeader>
<CardTitle>Descoberta de medicamentos</CardTitle>
</CardHeader>
<CardContent>
<p>
Acelere a pesquisa farmacêutica prevendo interações moleculares e eficácia de medicamentos.
</p>
</CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Monitoramento de pacientes</CardTitle>
</CardHeader>
<CardContent>
<p>Analise continuamente os sinais vitais dos pacientes e alerte os profissionais de saúde sobre possíveis problemas.</p>
</CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="p-4 bg-gray-800 text-white">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Aprendizagem personalizada</CardTitle>
</CardHeader>
<CardContent>
<p>Adapte o conteúdo educacional aos estilos de aprendizagem, ritmo e lacunas de conhecimento individuais.</p>
</CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Avaliação automatizada</CardTitle>
</CardHeader>
<CardContent>
<p>Forneça feedback instantâneo e detalhado sobre tarefas e avaliações para dar suporte ao aprendizado.</p>
</CardContent>
</Card>
<Card className="bg-gray-800 text-white">
<CardHeader>
<CardTitle>Criação de conteúdo</CardTitle>
</CardHeader>
<CardContent>
<p>
Gere materiais educacionais adaptados a requisitos curriculares e objetivos de aprendizado específicos.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                      <CardTitle>Assistência à Pesquisa</CardTitle>
</CardHeader>
<CardContent>
<p>
Ajude pesquisadores a analisar dados, identificar padrões e gerar insights a partir de informações
complexas.
</p>
</CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Veja o dunamisAI em ação</h2>
<p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
Experimente o poder e a versatilidade da nossa IA por meio de demonstrações interativas
</p>
</div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="rounded-xl border border-gray-700 bg-gray-800 shadow-lg">
                <div className="p-1 bg-gray-900 rounded-t-xl flex items-center">
                  <div className="flex space-x-2 ml-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-sm text-gray-400">Demonstração do dunamisAI</div>
</div>
<div className="p-6 h-[400px] flex items-center justify-center">
<div className="text-center space-y-4">
<Brain className="h-16 w-16 text-red-600 mx-auto animate-pulse" />
<h3 className="text-xl font-medium text-white">Demonstração interativa em breve</h3>
<p className="text-gray-400">
Nossa equipe está dando os retoques finais em uma demonstração interativa que mostrará todos os
recursos do dunamisAI.
</p>
<Button variant="outline" >Entrar na lista de espera</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Planos de preços</h2>
<p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
Escolha o plano perfeito para suas necessidades com nossas opções de preços flexíveis
</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {/* Free Plan */}
              <Card className="flex flex-col bg-gray-800 text-white">
                <CardHeader>
                <CardTitle className="text-xl">Grátis</CardTitle>
<CardDescription>Para indivíduos que exploram capacidades de IA</CardDescription>
</CardHeader>
<CardContent className="flex-1">
<div className="text-4xl font-bold mb-2">Grátis</div>
<p className="text-sm text-gray-400 mb-6">Grátis para sempre</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                  <polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span>Capacidades básicas de IA</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Suporte da comunidade</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                <Button size="lg" variant="outline">   <Link href="/duna.IA" style={{textDecoration:'none',color:'white'}}> Comece
                </Link></Button>

</CardFooter>
</Card>

{/* Plano Pro */}
<Card className="flex flex-col border-red-600 relative bg-gray-800 text-white">
<div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-red-600 px-3 py-1 text-xs font-bold text-white">
POPULAR
                </div>
                <CardHeader>
                <CardTitle className="text-xl">Profissional</CardTitle>
<CardDescription>Para profissionais e pequenas equipes</CardDescription>
</CardHeader>
<CardContent className="flex-1">
<div className="text-4xl font-bold mb-2">3.000kz</div>
<p className="text-sm text-gray-400 mb-6">por usuário / mês</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Suporte prioritário</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Análise avançada</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Acesso à API</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
               <Comprar name="Assine agora"/>

                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col bg-gray-800 text-white">
                <CardHeader>
                <CardTitle className="text-xl">Empresa</CardTitle>
<CardDescription>Para organizações com necessidades avançadas</CardDescription>
</CardHeader>
<CardContent className="flex-1">
<div className="text-4xl font-bold mb-2">Personalizado</div>
<p className="text-sm text-gray-400 mb-6">Entre em contato para saber os preços</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Todos os recursos profissionais</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Gerente de conta dedicado</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Suporte premium 24 horas por dia, 7 dias por semana</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Integrações personalizadas</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
<Comprar name="Assine agora"/>
</CardFooter>
</Card>
</div>
          </div>
        </section>

        <section  className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container-center px-4 md:px-6">
          <div className="lg:justify-center lg:flex gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Pronto para transformar seu fluxo de trabalho?
</h2>
<p className="max-w-[600px] text-gray-400 md:text-xl">
Junte-se a milhares de organizações que já estão aproveitando o dunamisAI para impulsionar a inovação e a eficiência.
</p>
</div>
<div className="flex flex-col gap-2 min-[400px]:flex-row">
<Button size="lg" className="bg-red-600">   <Link href="/duna.IA" style={{textDecoration:'none',color:'white'}}> Comece
</Link></Button>
<Button size="lg" variant="outline">
Agende uma demonstração
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white">Equipe de suporte dedicada para ajudar você a começar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white">Não é necessário cartão de crédito</span>
                    <span className="text-white">Não é necessário cartão de crédito para iniciar seu teste</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white">Planos de preços flexíveis para atender às suas necessidades</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-800 py-6 md:py-0">
        <div className="container-center flex flex-col items-center justify-between gap-3 md:h-24 md:flex-row">
          <div className="flex lg:mx-4 gap-2 items-center text-lg font-semibold">
            <Brain className="h-5 w-5 text-red-600" />
            <span>dunamisAI</span>
            </div>
<p className="text-center text-sm leading-loose text-gray-400 md:text-left">
© 2025 DJK. Todos os direitos reservados.
</p>
<div className="flex gap-3 w-50">
<Link href="#" className="text-sm text-gray-400 hover:text-white">
Termos de serviço
</Link>
<Link href="mailto:doncajoblack@gmail.com?subject=contanto%20com%20dev%20do%20BiV%20&body=Gostaria%20de%20informar%20algo%20ao%20sr%20dev&cc=doncajoblack@gmail.com&bcc=doncajoblack@gmail.com" style={{marginLeft:'5%'}} className="text-sm text-gray-400 hover:text-white">
Contato
</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


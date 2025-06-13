import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { showAlert } from "../utils/showAlert";
import { router } from "expo-router";

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showCommentary, setShowCommentary] = useState(false);

  const questions = [
    {
      id: 1,
      text: `Mas, afinal: o corretor ortográfico ajuda ou atrapalha?

 

    Quem nunca passou por aquela situação constrangedora proporcionada pelo corretor ortográfico que atire a primeira pedra. Essa ferramenta, que, na teoria, deveria nos ajudar a escrever perfeitamente e com mais facilidade, tem potencial para ser mais uma inimiga do que uma aliada.

    Um especialista em inovação e tecnologia afirma que essa ferramenta pode ser criada de várias maneiras. “Temos o trabalho humano, com pessoas checando os detalhes. E de outro lado existe a alimentação do corretor por dicionários, que, em tese, têm as palavras escritas corretamente”. Mas, afinal: será que o corretor mais ajuda ou mais atrapalha na escrita?

    De acordo com uma professora de um curso de Letras, depende primeiramente da concepção de escrita. “Se consideramos apenas a gramática e a ortografia, há ferramentas de revisão que auxiliam em aspectos ortográficos e até sintáticos. Mas essas ferramentas não garantem a coesão e a coerência, ou seja, as articulações e o sentido do texto. O acesso amplo à informação pode auxiliar na construção de repertório para a escrita, mas também é necessário ter contato com diferentes gêneros textuais e contar com o aprendizado de aspectos formais relacionados à escrita”, explica a professora.

Disponível em: https://canaltech.com.br. Acesso em: 5 fev. 2024 (adaptado).

 

De acordo com esse texto, o uso do corretor ortográfico`,
      options: [
        "a) ajusta a grafia com uma programação abastecida por dicionários.",
        "b) alinha a redação do texto às circunstâncias de interação verbal.",
        "c) atua no aprendizado da estruturação de gêneros textuais.",
        "d) amplia o repertório vocabular da língua portuguesa.",
        "e) colabora na construção dos sentidos do texto.",
      ],
      correctAnswer: 0,
      exam_type: "UEA-Específico humanas 2025",
      subject: "Leitura e interpretação de textos",
      level: "médio",
      textType: "reportagem",
      genre: "jornalístico",
      tags: [
        "UEA-Específico humanas 2025",
        "Leitura e interpretação de textos",
        "Tecnologia e linguagem",
        "Ortografia",
        "Corretor automático"
      ],
      commentedResolution: "A alternativa correta é a letra A porque o texto afirma que o corretor ortográfico é abastecido por dicionários e funciona a partir disso para sugerir ou corrigir palavras. As demais alternativas extrapolam ou distorcem o conteúdo do texto, que foca nas limitações e funcionamento técnico do corretor, e não em suas capacidades de gerar sentido, repertório ou domínio de gêneros."
,
    },
    {
      id: 2,
      text: "Qual das alternativas apresenta uma característica do Realismo na literatura brasileira?",
      options: [
        "a) Idealização da natureza e dos sentimentos.",
        "b) Análise psicológica profunda dos personagens.",
        "c) Exaltação do nacionalismo e patriotismo.",
        "d) Fuga da realidade através do sonho.",
        "e) Valorização do medievalismo europeu.",
      ],
      correctAnswer: 1,
      exam_type: "Enem",
      subject: "Literatura",
      level: "médio",
      textType: "questão objetiva",
      genre: "literario",
      tags: [
        "ENEM",
        "Literatura",
        "Realismo",
        "Movimentos literários",
        "Escolas literárias"
      ],
      commentedResolution: "A alternativa correta é a letra B, pois uma das principais características do Realismo é justamente a análise psicológica detalhada das personagens, com foco em suas motivações e conflitos internos. As demais alternativas se referem a outras escolas literárias: a idealização pertence ao Romantismo (a), o nacionalismo também (c), a fuga da realidade está ligada ao Simbolismo (d), e o medievalismo ao Romantismo ou Ultra-Romantismo (e).",
    },
    {
      id: 3,
      text: "Feijoada à minha moda\nAmiga Helena Sangirardi\nConforme um dia prometi\nOnde, confesso que esqueci\nE embora — perdoe — tão tarde\n(Melhor do que nunca!) este poeta\nSegundo manda a boa ética\nEnvia-lhe a receita (poética)\nDe sua feijoada completa.\nEm atenção ao adiantado\nDa hora em que abrimos o olho\nO feijão deve, já catado\nNos esperar, feliz de molho.\nUma vez cozido o feijão\n(Umas quatro horas, fogo médio)\nNós, bocejando o nosso tédio\nNos chegaremos ao fogão\n[...] De carne-seca suculenta\nGordos pedaços, não dê toucinho\n(Nunca orelhas de bacorinho\nQue a tornam em excesso opulenta!)\n[...]\nEnquanto ao lado, em fogo brando\nDesminguindo-se de gozo\nDeve também se estar fritando\nO torresminho delicioso\nEm cuja gordura, de resto\n(Melhor gordura nunca houve!)\nDeve depois frigir a couve\nPicada, em fogo alegre e presto.\n[...]\nDever cumprido. Nunca é vã\nA palavra de um poeta... — jamais!\nAbraça-a, em Brillat-Savarin,\nOs seus Vinicius de Moraes.\n\nMORAES, V. In: CÍCERO, A.; QUEIROZ, E. (Org.). Vinicius de Moraes: nova antologia poética. São Paulo: Cia. das Letras, 2005 (fragmento).\nApesar de haver marcas formais de carta e receita, a característica que define esse texto como poema é(o",
      options: [
        "a) anomeação de um interlocutor.",
        "b) manifestação de intimidade.",
        "c) descrição de procedimentos.",
        "d) utilização de uma linguagem expressiva.",
        "e) apresentação de ingredientes culinários.",
      ],
      correctAnswer: 3,
      exam_type: "ENEM 1º Dia (Azul) 2024",
      subject: "portugues",
      level: "médio",
      textType: "poema",
      genre: "literario",
      tags: ["ENEM 1º Dia (Azul) 2024","Linguagem poética", "Interpretação de texto", "Gêneros textuais", "Vinicius de Moraes"],
      commentedResolution: "Embora o texto apresente elementos de carta e receita, a principal característica que o define como poema é a linguagem expressiva, marcada pelo tom subjetivo, ritmo e metáforas, como se percebe ao longo do texto.",
    },
  ];

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption == null) {
      showAlert(
        "Atenção",
        "Por favor, selecione uma resposta antes de continuar."
      );
      return;
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Load the saved answer of the next question, if any at all
      setSelectedOption(newAnswers[currentQuestion + 1]);
    } else {
      // Calculate the final score
      let finalScore = 0;
      newAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
          finalScore++;
        }
      });
      setScore(finalScore);
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Load the saved answer from the previous question if the user returns to it
      setSelectedOption(answers[currentQuestion - 1] || null);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswers([]);
    setShowResult(false);
    setScore(0);
  };

  const currentQ = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    const isGoodScore = percentage >= 70;

    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.flagIcon}>
              <Text style={styles.flagText}>🇧🇷</Text>
            </View>
            <Text style={styles.logo}>EducaQuiz</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/home")}>
            {" "}
            <Text style={styles.homeIcon}>🏠</Text>
          </TouchableOpacity>
        </View>

        {/* Result Content */}
        <View style={styles.resultContainer}>
          <View style={styles.resultCard}>
            <Text style={styles.resultIcon}>{isGoodScore ? "✅" : "❌"}</Text>
            <Text style={styles.resultTitle}>Quiz Finalizado!</Text>
            <Text style={styles.resultSubtitle}>
              Você acertou {score} de {questions.length} questões
            </Text>
            <Text style={styles.resultPercentage}>{percentage}%</Text>

            <TouchableOpacity style={styles.restartButton} onPress={resetQuiz}>
              <Text style={styles.restartText}>Fazer Novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.flagIcon}>
            <Text style={styles.flagText}>🇧🇷</Text>
          </View>
          <Text style={styles.logo}>EducaQuiz</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.homeIcon}>🏠</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${progressPercentage}%` }]}
          />
        </View>
        <Text style={styles.questionCount}>
          Pergunta {currentQuestion + 1} de {questions.length}
        </Text>
      </View>

      {/* Question Header Info */}
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 12, color: "#666" }}>
        <Text style={styles.subjectText}>({currentQ.exam_type}) • {currentQ.level} • {currentQ.textType} • {currentQ.genre}</Text>
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 4 }}>
          {currentQ.tags?.map((tag, index) => (
            <Text
              key={index}
              style={{
                backgroundColor: "#e0e0e0",
                color: "#333",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 12,
                fontSize: 10,
                marginRight: 6,
                marginBottom: 4,
              }}
            >
              {tag}
            </Text>
          ))}
        </View>
      </View>      
      <TouchableOpacity
        style={{
          backgroundColor: "#0E1D50",
          padding: 10,
          borderRadius: 8,
          marginTop: 16,
          alignSelf: "flex-start",
        }}
        onPress={() => setShowCommentary(!showCommentary)}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>
          {showCommentary ? "Fechar resolução" : "Resolução comentada"}
        </Text>
      </TouchableOpacity>

      {/* Commentary Section */}
      {showCommentary && (
        <View
          style={{
            marginTop: 10,
            backgroundColor: "#f1f1f1",
            padding: 15,
            borderRadius: 8,
            borderLeftWidth: 4,
            borderLeftColor: "#0E1D50",
          }}
        >
          <Text style={{ fontSize: 14, color: "#333" }}>
            {currentQ.commentedResolution}
          </Text>
        </View>
      )}

      {/* Question Text */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQ.text}</Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {currentQ.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedOption === index && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(index)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === index && styles.selectedOptionText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[
            styles.navigationButton,
            styles.previousButton,
            currentQuestion === 0 && styles.disabledButton,
          ]}
          onPress={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <Text
            style={[
              styles.navigationText,
              currentQuestion === 0 && styles.disabledText,
            ]}
          >
            ← Anterior
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navigationButton,
            styles.nextButton,
            selectedOption === null && styles.disabledButton,
          ]}
          onPress={handleNext}
          disabled={selectedOption === null}
        >
          <Text
            style={[
              styles.navigationText,
              styles.nextButtonText,
              selectedOption === null && styles.disabledText,
            ]}
          >
            {currentQuestion < questions.length - 1 ? "Próxima →" : "Finalizar"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BFBFBF",
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  flagIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#28a745",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  flagText: {
    fontSize: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0E1D50",
  },
  homeIcon: {
    fontSize: 28,
    color: "#0E1D50",
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressBar: {
    height: 12,
    backgroundColor: "#fff",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressFill: {
    height: "100%", // 1 of 10
    backgroundColor: "#007bff",
    borderRadius: 6,
  },
  questionCount: {
    textAlign: "right",
    color: "#0E1D50",
    fontSize: 14,
  },
  questionInfo: {
    marginBottom: 15,
  },
  examText: {
    fontSize: 12,
    color: "#666",
  },
  subjectText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0E1D50",
  },
  questionContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 20,
  },
  optionsContainer: {
    gap: 12,
  },
  option: {
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#e9ecef",
  },
  selectedOption: {
    backgroundColor: "#e3f2fd",
    borderColor: "#0E1D50",
  },
  optionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  selectedOptionText: {
    color: "#0E1D50",
    fontWeight: "500",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  navigationButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  previousButton: {
    backgroundColor: "#6c757d",
  },
  nextButton: {
    backgroundColor: "#0E1D50",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  navigationText: {
    fontSize: 16,
    fontWeight: "600",
  },
  nextButtonText: {
    color: "#fff",
  },
  disabledText: {
    color: "#999",
  },
  // Result Screen Styles
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 30,
    alignItems: "center",
    width: "100%",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0E1D50",
    marginBottom: 8,
  },
  resultSubtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  resultPercentage: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#0E1D50",
    marginBottom: 24,
  },
  restartButton: {
    backgroundColor: "#0E1D50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "100%",
  },
  restartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

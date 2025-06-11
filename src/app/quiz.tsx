import React, { useState } from "react"; 
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert
} from "react-native";

export default function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            id: 1,
            text: "Inscrito na estética romântica da literatura brasileira, o conto descreve aspectos da realidade nacional no século XIX ao:",
            options: [
                "a) Revelar a imposição de crenças religiosas a pessoas escravizadas.",
                "b) Apontar a hipocrisia do discurso conservador na defesa da escravidão.",
                "c) sugerir práticas de violência física e moral em nome do progresso matematico",
                "d) relacionar o declínio da produção agrícola e comercial a questões raciais.",
                "e) ironizar o comportamento dos proprietários de terra na exploração do trabalho."
            ],
            correctAnswer: 1,
            exam_type: "Enem 2022",
            subject: "A escrava"
        },
        {
            id: 2,
            text: "Qual das alternativas apresenta uma característica do Realismo na literatura brasileira?",
            options: [
                "b) Análise psicológica profunda dos personagens.",
                "a) Idealização da natureza e dos sentimentos.",
                "c) Exaltação do nacionalismo e patriotismo.",
                "d) Fuga da realidade através do sonho.",
                "e) Valorização do medievalismo europeu."
            ],
            correctAnswer: 1, 
            exam_type: "Simulado",
            subject: "Literatura"
        },
        {
            id: 3,
            text: "A respeito do Barroco brasileiro, é correto afirmar:",
            options: [
                "a) Teve como principal característica o equilíbrio e a harmonia.",
                "b) Manifestou-se principalmente através da contradição e do conflito.",
                "c) Priorizou temas pagãos em detrimento dos religiosos.",
                "d) Seguiu rigorosamente os modelos clássicos greco-romanos.",
                "e) Desenvolveu-se independentemente das influências europeias."
            ],
            correctAnswer: 1,
            exam_type: "Simulado",
            subject: "Literatura"
        }
    ];

    const handleOptionSelect = (optionIndex) => {
        setSelectedOption(optionIndex);
    };

    const handleNext = () => {
        if (selectedOption == null) {
            Alert.alert("Atenção","Por favor, selecione uma resposta antes de continuar.")
            return;
        }

        const newAnswers = [...answers];
        newAnswers[currentQuestion] = selectedOption; 
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            // Load the saved answer of the next question, if any at all
            setSelectedOption(newAnswers[currentQuestion + 1])
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

    const currentQ = questions[currentQuestion]
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
          <TouchableOpacity>
            <Text style={styles.homeIcon}>🏠</Text>
          </TouchableOpacity>
        </View>

        {/* Result Content */}
        <View style={styles.resultContainer}>
          <View style={styles.resultCard}>
            <Text style={styles.resultIcon}>
              {isGoodScore ? '✅' : '❌'}
            </Text>
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
                <TouchableOpacity>
                    <Text style={styles.homeIcon}>🏠</Text>
                </TouchableOpacity>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View
                    style={[
                        styles.progressFill,
                        { width: `${progressPercentage}%` }
                    ]}
                />
                </View>
                <Text style={styles.questionCount}>
                    Pergunta {currentQuestion + 1} de {questions.length}
                </Text>
            </View>

            {/* Question Header Info */}
            <View style={styles.questionInfo}>
                <Text style={styles.examText}>({currentQ.exam_type})</Text>
                <Text style={styles.subjectText}>{currentQ.subject}</Text>
            </View>

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
                              selectedOption === index && styles.selectedOption
                           ]}
                           onPress={() => handleOptionSelect(index)}
                        >
                            <Text style={[
                                styles.optionText,
                                selectedOption === index && styles.selectedOptionText
                            ]}>
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
                     currentQuestion === 0 && styles.disabledButton
                   ]}
                   onPress={handlePrevious}
                   disabled={currentQuestion === 0}
                >
                    <Text style={[
                        styles.navigationText,
                        currentQuestion === 0 && styles.disabledText
                    ]}>
                        ← Anterior
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.navigationButton,
                    styles.nextButton,
                    selectedOption === null && styles.disabledButton
                  ]}
                  onPress={handleNext}
                  disabled={selectedOption === null}
                >
                    <Text style={[
                        styles.navigationText,
                        styles.nextButtonText,
                        selectedOption === null && styles.disabledText
                    ]}>
                        {currentQuestion < questions.length - 1 ? 'Próxima →' : 'Finalizar'} 
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6B83A2",
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
        color: "#0E1D50"
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
        gap:  12,
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
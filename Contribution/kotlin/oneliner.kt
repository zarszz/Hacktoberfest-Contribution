fun main() {
    for( i in 1..7) println("*".repeat(i))
    for( i in 1..12 step 2) println("${" ".repeat((11-i)/2)}${"*".repeat(i)}")
    for( i in 9 downTo 0 step 2) println("${" ".repeat((11-i)/2)}${"*".repeat(i)}")
}
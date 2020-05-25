package database

import (
	"fmt"
	"os"
	"os/exec"
)

// ResetTable User data replay repo to clear the table and copy the schema from test environment
func TestResetTable() error {
	dataResetPath := os.Getenv("GIERKINET_DATA_REPLAY_PATH")
	cmd := exec.Command("make", "-C", dataResetPath, "start-dev-database")
	out, err := cmd.CombinedOutput()
	fmt.Printf("\n%s\n%s\n", err, string(out))
	return err
}

// SetTableState uses data replay repo to inject data into the table
func TestSetTableState(state string) error {
	dataResetPath := os.Getenv("GIERKINET_DATA_REPLAY_PATH")
	cmd := exec.Command("make", "-C", dataResetPath, fmt.Sprintf("data-replay-%s", state))
	out, err := cmd.CombinedOutput()
	fmt.Printf("errror:\n%s\ncombined out:\n%s\n", err, string(out))
	return err
}
